const STORAGE_KEY = "pd_admin_articles_v1";
const DEFAULT_IMAGE = "assets/images/hero-ear.jpg";

const state = {
  articles: loadArticles(),
  image: DEFAULT_IMAGE,
  projectHandle: null,
  slugTouched: false
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const form = $("#articleForm");
const sectionList = $("#sectionList");

function loadArticles() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const localArticles = Array.isArray(parsed) ? parsed : [];
    const generated = Array.isArray(window.PD_GENERATED_ARTICLES) ? window.PD_GENERATED_ARTICLES : [];
    return [...new Map([...generated, ...localArticles].map(article => [article.slug, article])).values()];
  } catch {
    return [];
  }
}

function persistArticles() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.articles));
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

function slugify(value = "") {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 160);
}

function todayValue() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function displayDate(value) {
  if (!value) return "";
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(value)) return value;
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}`;
}

function inputDate(value) {
  if (!value) return todayValue();
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [day, month, year] = value.split(".");
  return `${year}-${month}-${day}`;
}

function toast(message) {
  const element = $("#adminToast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2600);
}

function sectionTemplate(section = ["", ""]) {
  const element = document.createElement("div");
  element.className = "section-editor";
  element.innerHTML = `
    <span class="section-handle" aria-hidden="true">⋮⋮</span>
    <div class="section-fields">
      <input class="section-title" type="text" maxlength="140" placeholder="Tiêu đề mục" value="${escapeHtml(section[0])}" required>
      <textarea class="section-content" placeholder="Nội dung của mục" required>${escapeHtml(section[1])}</textarea>
    </div>
    <button class="section-remove" type="button" aria-label="Xóa mục">×</button>`;
  element.querySelector(".section-remove").addEventListener("click", () => {
    if ($$(".section-editor").length <= 1) return toast("Bài viết cần ít nhất một mục nội dung.");
    element.remove();
  });
  return element;
}

function addSection(section) {
  sectionList.append(sectionTemplate(section));
}

function collectArticle() {
  const id = $("#articleId").value || crypto.randomUUID();
  const sections = $$(".section-editor").map(element => [
    element.querySelector(".section-title").value.trim(),
    element.querySelector(".section-content").value.trim()
  ]).filter(section => section[0] && section[1]);
  return {
    id,
    slug: $("#articleSlug").value.trim(),
    title: $("#articleTitle").value.trim(),
    category: $("#articleCategory").value,
    date: displayDate($("#articleDate").value),
    image: state.image,
    excerpt: $("#articleExcerpt").value.trim(),
    intro: $("#articleIntro").value.trim(),
    likes: 0,
    sections,
    published: $("#articlePublished").checked,
    staticPath: `posts/${$("#articleSlug").value.trim()}.html`,
    updatedAt: new Date().toISOString()
  };
}

function validateArticle(article) {
  if (!article.slug || !article.title || !article.excerpt || !article.intro) return "Vui lòng điền đủ thông tin bài viết.";
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) return "Đường dẫn chỉ dùng chữ thường không dấu, số và dấu gạch ngang.";
  if (!article.sections.length) return "Bài viết cần ít nhất một mục nội dung hoàn chỉnh.";
  const duplicate = state.articles.find(item => item.slug === article.slug && item.id !== article.id);
  if (duplicate) return "Đường dẫn này đã được dùng cho bài viết khác.";
  return "";
}

function saveArticleLocal(article) {
  const index = state.articles.findIndex(item => item.id === article.id);
  if (index >= 0) state.articles[index] = article;
  else state.articles.unshift(article);
  persistArticles();
}

function safeJson(data) {
  return JSON.stringify(data, null, 2).replace(/</g, "\\u003c");
}

function buildArticleHtml(article) {
  const title = escapeHtml(article.title);
  const description = escapeHtml(article.excerpt);
  const embedded = safeJson([{ ...article, staticPath: `posts/${article.slug}.html` }]);
  const image = escapeHtml(article.image || DEFAULT_IMAGE);
  const sections = article.sections.map((section, index) => `
            <section class="blog-section" id="section-${index + 1}">
              <h2>${index + 1}. ${escapeHtml(section[0])}</h2>
              <p>${escapeHtml(section[1]).replace(/\n/g, "<br>")}</p>
            </section>`).join("");
  return `<!doctype html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${description}">
  <base href="../">
  <link rel="icon" href="data:,">
  <title>${title} | Piercing Da Nang</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <style>
    body{margin:0;color:#18201d;background:#fbfcf8;font-family:"Nunito",Arial,sans-serif;line-height:1.65}*{box-sizing:border-box}a{color:inherit}.container{width:min(1180px,calc(100% - 48px));margin:auto}.site-header{border-bottom:1px solid #dce1dc;background:#fbfaf6}.nav-wrap{min-height:82px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand img{display:block;width:235px;max-width:100%}.desktop-nav{display:flex;gap:30px}.desktop-nav a{text-decoration:none;font-size:14px;font-weight:700}.blog-page{padding-top:24px}.breadcrumb{margin-bottom:22px;color:#6f746f;font-size:13px}.blog-layout{display:grid;grid-template-columns:minmax(0,780px) minmax(230px,1fr);gap:64px;padding-bottom:64px}.blog-header h1{margin:0 0 14px;color:#14382f;font-size:52px;line-height:1.08}.blog-header time{color:#6f746f;font-size:13px}.blog-intro{margin:24px 0;color:#4e5e58;font-size:16px}.blog-hero-image{display:block;width:100%;max-height:420px;aspect-ratio:16/7;object-fit:cover}.blog-body{padding-top:18px}.blog-section{margin-bottom:28px}.blog-section h2{margin:0 0 8px;color:#243e36;font-size:30px;line-height:1.15}.blog-section p{margin:0;color:#59645f;font-size:16px}.blog-closing{padding:22px 0;border-top:1px solid #dce1dc;color:#4f5c57}.related-sidebar{align-self:start;padding-top:6px}.related-sidebar h2{font-size:23px}.related-sidebar a{display:block;margin:10px 0;color:#14382f;font-weight:700}.site-footer{padding:34px 0;background:#17201d;color:#f2f2ed}.footer-grid{display:flex;align-items:center;justify-content:space-between;gap:30px}.footer-brand img{width:210px;filter:invert(1) grayscale(1) brightness(2)}.footer-grid p{max-width:580px;margin:0;color:#cbd0cd;font-size:13px}@media(max-width:760px){.container{width:min(100% - 24px,1180px)}.nav-wrap{min-height:70px}.brand img{width:180px}.desktop-nav{display:none}.blog-layout{grid-template-columns:1fr;gap:24px}.blog-header h1{font-size:38px}.blog-section h2{font-size:24px}.related-sidebar{border-top:1px solid #dce1dc}.footer-grid{align-items:flex-start;flex-direction:column}}
  </style>
  <link rel="stylesheet" href="styles.css">
</head>
<body data-page="article" data-article-slug="${escapeHtml(article.slug)}">
  <div id="site-header">
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html"><img src="assets/images/logo-transparent.png" alt="Piercing Da Nang"></a>
        <nav class="desktop-nav" aria-label="Điều hướng chính">
          <a href="index.html">Trang chủ</a><a href="locations.html">Địa điểm xỏ khuyên</a><a href="trends.html">Xu hướng</a><a href="knowledge.html">Kiến thức xỏ khuyên</a><a href="care.html">Cách chăm sóc</a>
        </nav>
      </div>
    </header>
  </div>
  <main id="app">
    <article class="blog-page">
      <div class="container blog-breadcrumb"><nav class="breadcrumb"><a href="index.html">Trang chủ</a> / ${escapeHtml(article.category)} / ${title}</nav></div>
      <div class="container blog-layout">
        <div class="blog-main">
          <header class="blog-header"><h1>${title}</h1><time>${escapeHtml(article.date)}</time></header>
          <p class="blog-intro">${escapeHtml(article.intro)}</p>
          <img class="blog-hero-image" src="${image}" alt="${title}">
          <div class="blog-body">${sections}
            <p class="blog-closing">Hy vọng những gợi ý trên giúp bạn có thêm thông tin để đưa ra lựa chọn phù hợp. Hãy ưu tiên sự an toàn trong suốt quá trình xỏ và chăm sóc lỗ xỏ.</p>
          </div>
        </div>
        <aside class="related-sidebar"><h2>Khám phá thêm</h2><a href="knowledge.html">Kiến thức xỏ khuyên</a><a href="trends.html">Xu hướng mới</a><a href="care.html">Cách chăm sóc</a></aside>
      </div>
    </article>
  </main>
  <div id="site-footer"><footer class="site-footer"><div class="container footer-grid"><div class="footer-brand"><img src="assets/images/logo-transparent.png" alt="Piercing Da Nang"></div><p>Cung cấp thông tin về các địa điểm xỏ khuyên, kiến thức và hướng dẫn chăm sóc lỗ xỏ tại Đà Nẵng.</p></div></footer></div>
  <script>window.PD_GENERATED_ARTICLES = ${embedded};<\/script>
  <script src="i18n.js"></script>
  <script src="content/generated-articles.js"></script>
  <script src="app.js" defer></script>
</body>
</html>
`;
}

function buildGeneratedData() {
  const published = state.articles.filter(article => article.published !== false).map(article => ({
    ...article,
    staticPath: `posts/${article.slug}.html`
  }));
  return `window.PD_GENERATED_ARTICLES = [...(window.PD_GENERATED_ARTICLES || []), ...${safeJson(published)}];\n`;
}

async function writeFile(directory, name, content) {
  const fileHandle = await directory.getFileHandle(name, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(content);
  await writable.close();
}

async function publishToProject(article) {
  if (!state.projectHandle) return false;
  const permission = await state.projectHandle.requestPermission({ mode: "readwrite" });
  if (permission !== "granted") throw new Error("Chưa có quyền ghi vào thư mục dự án.");
  const posts = await state.projectHandle.getDirectoryHandle("posts", { create: true });
  const content = await state.projectHandle.getDirectoryHandle("content", { create: true });
  await writeFile(posts, `${article.slug}.html`, buildArticleHtml(article));
  await writeFile(content, "generated-articles.js", buildGeneratedData());
  return true;
}

async function syncProject() {
  if (!state.projectHandle) throw new Error("Hãy chọn thư mục dự án trước.");
  const permission = await state.projectHandle.requestPermission({ mode: "readwrite" });
  if (permission !== "granted") throw new Error("Chưa có quyền ghi vào thư mục dự án.");
  const posts = await state.projectHandle.getDirectoryHandle("posts", { create: true });
  const content = await state.projectHandle.getDirectoryHandle("content", { create: true });
  const published = state.articles.filter(article => article.published !== false);
  for (const article of published) await writeFile(posts, `${article.slug}.html`, buildArticleHtml(article));
  await writeFile(content, "generated-articles.js", buildGeneratedData());
  return published.length;
}

function download(name, content, type = "text/plain") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadCurrentHtml() {
  const article = collectArticle();
  const error = validateArticle(article);
  if (error) return toast(error);
  download(`${article.slug}.html`, buildArticleHtml(article), "text/html;charset=utf-8");
  toast("Đã tạo file HTML của bài viết.");
}

function renderTable(query = "") {
  const normalized = query.trim().toLocaleLowerCase("vi");
  const articles = state.articles.filter(article => `${article.title} ${article.category}`.toLocaleLowerCase("vi").includes(normalized));
  $("#articleTableBody").innerHTML = articles.map(article => `
    <tr>
      <td><div class="article-name"><img src="${escapeHtml(article.image || DEFAULT_IMAGE)}" alt=""><div><strong>${escapeHtml(article.title)}</strong><small>posts/${escapeHtml(article.slug)}.html</small></div></div></td>
      <td>${escapeHtml(article.category)}</td>
      <td>${escapeHtml(article.date)}</td>
      <td><span class="status-pill ${article.published === false ? "draft" : ""}">${article.published === false ? "Bản nháp" : "Công khai"}</span></td>
      <td><div class="table-actions">
        <a href="${escapeHtml(article.staticPath || `posts/${article.slug}.html`)}" target="_blank" title="Xem bài">↗</a>
        <button type="button" data-edit="${escapeHtml(article.id)}" title="Chỉnh sửa">✎</button>
        <button type="button" data-delete="${escapeHtml(article.id)}" title="Xóa">×</button>
      </div></td>
    </tr>`).join("");
  $("#articlesEmpty").hidden = articles.length > 0;
}

function resetForm() {
  form.reset();
  $("#articleId").value = "";
  $("#articleDate").value = todayValue();
  $("#articlePublished").checked = true;
  sectionList.innerHTML = "";
  addSection();
  state.image = DEFAULT_IMAGE;
  state.slugTouched = false;
  $("#imagePreview").src = DEFAULT_IMAGE;
  $("#excerptCount").textContent = "0";
  updatePreview();
}

function editArticle(id) {
  const article = state.articles.find(item => item.id === id);
  if (!article) return;
  showView("editor");
  $("#articleId").value = article.id;
  $("#articleTitle").value = article.title;
  $("#articleSlug").value = article.slug;
  $("#articleCategory").value = article.category;
  $("#articleDate").value = inputDate(article.date);
  $("#articleExcerpt").value = article.excerpt;
  $("#articleIntro").value = article.intro;
  $("#articlePublished").checked = article.published !== false;
  state.image = article.image || DEFAULT_IMAGE;
  state.slugTouched = true;
  $("#imagePreview").src = state.image;
  sectionList.innerHTML = "";
  article.sections.forEach(addSection);
  $("#excerptCount").textContent = String(article.excerpt.length);
  updatePreview();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function deleteArticle(id) {
  const article = state.articles.find(item => item.id === id);
  if (!article || !confirm(`Xóa bài “${article.title}”?`)) return;
  state.articles = state.articles.filter(item => item.id !== id);
  persistArticles();
  renderTable($("#articleSearch").value);
  toast("Đã xóa bài khỏi danh sách quản trị.");
}

function showView(view) {
  const editor = view === "editor";
  $("#editorView").classList.toggle("active", editor);
  $("#articlesView").classList.toggle("active", !editor);
  $("#adminPageTitle").textContent = editor ? "Viết bài mới" : "Quản lý bài viết";
  $$('[data-admin-view]').forEach(button => button.classList.toggle("active", button.dataset.adminView === view));
  if (!editor) renderTable($("#articleSearch").value);
}

function updatePreview() {
  $("#previewTitle").textContent = $("#articleTitle").value.trim() || "Tiêu đề bài viết";
  $("#previewExcerpt").textContent = $("#articleExcerpt").value.trim() || "Mô tả ngắn sẽ xuất hiện tại đây.";
  $("#previewCategory").textContent = $("#articleCategory").value;
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      const maxWidth = 1440;
      const maxHeight = 900;
      const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/webp", .78));
    };
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Không thể đọc ảnh.")); };
    image.src = url;
  });
}

form.addEventListener("submit", async event => {
  event.preventDefault();
  const article = collectArticle();
  const error = validateArticle(article);
  if (error) return toast(error);
  try {
    saveArticleLocal(article);
  } catch {
    return toast("Bộ nhớ trình duyệt đã đầy. Hãy dùng ảnh nhỏ hơn hoặc xuất dữ liệu trước.");
  }
  try {
    const published = await publishToProject(article);
    toast(published ? `Đã tạo posts/${article.slug}.html và cập nhật danh sách bài.` : "Đã lưu. Chọn thư mục dự án để ghi file thẳng vào repo.");
  } catch (error) {
    toast(error.message || "Không thể ghi file vào dự án.");
  }
  renderTable();
});

$("#chooseProject").addEventListener("click", async () => {
  if (!("showDirectoryPicker" in window)) return toast("Trình duyệt này chưa hỗ trợ ghi thư mục. Bạn vẫn có thể tải file HTML.");
  try {
    const handle = await window.showDirectoryPicker({ mode: "readwrite" });
    try {
      await handle.getFileHandle("app.js");
      await handle.getFileHandle("styles.css");
    } catch {
      return toast("Thư mục đã chọn không phải thư mục gốc của website.");
    }
    state.projectHandle = handle;
    $("#chooseProject").textContent = `Đã chọn: ${state.projectHandle.name}`;
    toast("Đã kết nối thư mục dự án. Bấm Lưu và xuất bản để tạo file.");
  } catch (error) {
    if (error.name !== "AbortError") toast("Không thể mở thư mục dự án.");
  }
});

$("#syncProject").addEventListener("click", async () => {
  try {
    const count = await syncProject();
    toast(`Đã đồng bộ ${count} bài và cập nhật content/generated-articles.js.`);
  } catch (error) {
    toast(error.message || "Không thể đồng bộ dự án.");
  }
});

$("#articleTitle").addEventListener("input", event => {
  if (!state.slugTouched) $("#articleSlug").value = slugify(event.target.value);
  updatePreview();
});
$("#articleSlug").addEventListener("input", event => {
  state.slugTouched = true;
  event.target.value = slugify(event.target.value);
});
$("#articleExcerpt").addEventListener("input", event => {
  $("#excerptCount").textContent = String(event.target.value.length);
  updatePreview();
});
$("#articleCategory").addEventListener("change", updatePreview);
$("#articleImage").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 12 * 1024 * 1024) return toast("Ảnh gốc phải nhỏ hơn 12 MB.");
  try {
    state.image = await compressImage(file);
    $("#imagePreview").src = state.image;
    toast("Đã nén và thêm ảnh đại diện.");
  } catch (error) {
    toast(error.message);
  }
});

$("#addSection").addEventListener("click", () => addSection());
$("#resetArticle").addEventListener("click", resetForm);
$("#downloadHtml").addEventListener("click", downloadCurrentHtml);
$("#articleSearch").addEventListener("input", event => renderTable(event.target.value));
$$('[data-admin-view]').forEach(button => button.addEventListener("click", () => showView(button.dataset.adminView)));
$("#articleTableBody").addEventListener("click", event => {
  const edit = event.target.closest("[data-edit]");
  const remove = event.target.closest("[data-delete]");
  if (edit) editArticle(edit.dataset.edit);
  if (remove) deleteArticle(remove.dataset.delete);
});

$("#exportArticles").addEventListener("click", () => {
  download(`piercing-articles-${todayValue()}.json`, JSON.stringify(state.articles, null, 2), "application/json");
  toast("Đã xuất bản sao dữ liệu.");
});

$("#importArticles").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    if (!Array.isArray(parsed)) throw new Error();
    state.articles = parsed;
    persistArticles();
    renderTable();
    toast(`Đã nhập ${parsed.length} bài viết.`);
  } catch {
    toast("File dữ liệu không hợp lệ.");
  }
  event.target.value = "";
});

resetForm();
renderTable();
