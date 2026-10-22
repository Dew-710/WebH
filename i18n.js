(() => {
  const queryLang = new URLSearchParams(location.search).get("lang");
  const lang = queryLang === "en" || queryLang === "vi" ? queryLang : (localStorage.getItem("pd-language") || "vi");
  localStorage.setItem("pd-language", lang);
  document.documentElement.lang = lang;

  const ui = {
    "Trang chủ": "Home",
    "Piercing Da Nang": "Piercing Da Nang",
    "Xỏ khuyên": "Piercing",
    "xỏ khuyên": "piercing studios",
    "mới nhất": "latest",
    "có mấy giai đoạn?": "what are the stages?",
    "Chăm sóc lỗ xỏ": "Piercing aftercare",
    "sau khi xỏ khuyên": "after piercing",
    "Địa điểm": "Studios",
    "Kinh nghiệm": "Advice",
    "Kiến thức": "Guide",
    "Địa điểm & khuyên": "Studios & Piercing",
    "Xu hướng": "Trends",
    "Kiến thức xỏ khuyên": "Piercing Guide",
    "Cách chăm sóc": "Aftercare",
    "Mở tìm kiếm": "Open search",
    "Mở menu": "Open menu",
    "Đóng tìm kiếm": "Close search",
    "Đóng chi tiết": "Close details",
    "Tìm trong Piercing Da Nang": "Search Piercing Da Nang",
    "Tên tiệm, địa chỉ, bài viết...": "Studio, address, article...",
    "Tìm kiếm": "Search",
    "Chăm sóc lỗ xỏ": "Piercing aftercare",
    "Tiệm uy tín": "Trusted studios",
    "Xu hướng mới": "Latest trends",
    "Khám phá các địa điểm xỏ khuyên tại Đà Nẵng": "Discover piercing studios in Da Nang",
    "Xỏ khuyên Đà Nẵng": "Piercing in Da Nang",
    "Tìm kiếm các tiệm xỏ khuyên uy tín, khám phá xu hướng mới nhất và trang bị kiến thức, cách chăm sóc lỗ xỏ an toàn, đúng cách.": "Find trusted piercing studios, explore the latest trends, and learn how to care for your piercing safely and correctly.",
    "Tìm tiệm xỏ khuyên gần bạn": "Find a piercing studio near you",
    "Khám phá các tiệm xỏ khuyên tại Đà Nẵng thông qua bản đồ. Chọn phường bạn muốn tìm kiếm để xem danh sách trong khu vực.": "Explore piercing studios across Da Nang on the map. Select a ward to view studios in that area.",
    "Tìm theo tên tiệm, địa chỉ...": "Search by studio or address...",
    "Phường": "Ward",
    "Tất cả phường": "All wards",
    "Đánh giá": "Rating",
    "★ Đánh giá": "★ Rating",
    "Tất cả đánh giá": "All ratings",
    "Giờ mở cửa": "Opening hours",
    "Tất cả khung giờ": "All hours",
    "Buổi sáng": "Morning",
    "Buổi tối": "Evening",
    "Áp dụng": "Apply",
    "Google Maps hiển thị các tiệm phù hợp": "Google Maps shows matching studios",
    "Mở Google Maps": "Open Google Maps",
    "Mở Google Maps ↗": "Open Google Maps ↗",
    "Địa điểm xỏ khuyên Đà Nẵng": "Piercing studios in Da Nang",
    "Bài viết, đánh giá và kinh nghiệm chọn tiệm theo từng khu vực.": "Articles, reviews, and practical tips for choosing a studio by area.",
    "Xem tất cả bài viết": "View all articles",
    "Đọc thêm": "Read more",
    "Khám phá thêm về xỏ khuyên": "Explore more about piercing",
    "✦ Khám phá thêm về xỏ khuyên": "✦ Explore more about piercing",
    "Xu hướng xỏ khuyên": "Piercing trends",
    "✦ Xu hướng xỏ khuyên": "✦ Piercing trends",
    "Cập nhật những kiểu xỏ khuyên được yêu thích và cách phối khuyên thể hiện cá tính riêng.": "Discover popular piercings and styling ideas that express your personality.",
    "Kiến thức xỏ khuyên": "Piercing guide",
    "✦ Kiến thức xỏ khuyên": "✦ Piercing guide",
    "Tìm hiểu quy trình xỏ khuyên, các vị trí phổ biến và những điều cần biết trước khi xỏ.": "Learn about the piercing process, popular placements, and what to know beforehand.",
    "Hướng dẫn vệ sinh, chăm sóc lỗ xỏ và phòng tránh biến chứng.": "Learn how to clean and care for a piercing and reduce complications.",
    "Xem thêm": "Explore",
    "Sẵn sàng khám phá": "Ready to discover",
    "Phong cách của bạn?": "Your style?",
    "Tìm kiếm tiệm xỏ khuyên phù hợp và bắt đầu hành trình khám phá cá tính riêng tại Đà Nẵng.": "Find the right piercing studio and start expressing your style in Da Nang.",
    "Địa điểm xỏ khuyên": "Piercing studios",
    "Khám phá các địa chỉ xỏ khuyên uy tín tại Đà Nẵng, từ những studio chuyên nghiệp đến các tiệm chất lượng, giúp bạn tìm được nơi phù hợp và an toàn.": "Explore trusted piercing studios in Da Nang and find a place that suits your style and safety needs.",
    "Bài viết liên quan": "Related articles",
    "Xu hướng xỏ khuyên mới nhất": "Latest piercing trends",
    "Cập nhật những kiểu xỏ khuyên hot nhất hiện nay, cách phối khuyên cá tính và gợi ý phong cách phù hợp với bạn.": "See the latest piercing styles, curated combinations, and ideas that suit you.",
    "Khám phá thêm": "Explore more",
    "Xỏ khuyên có mấy giai đoạn?": "What are the stages of piercing?",
    "Từ chuẩn bị - thực hiện - chăm sóc, hiểu đúng quy trình để có trải nghiệm an toàn và kết quả đẹp nhất.": "From preparation and piercing to aftercare, understand the process for a safer experience and better results.",
    "Giai đoạn chuẩn bị": "Preparation",
    "Tư vấn - Kiểm tra - Vệ sinh": "Consultation - Assessment - Cleaning",
    "Giai đoạn thực hiện": "Piercing procedure",
    "Xỏ khuyên": "Piercing",
    "Giai đoạn chăm sóc": "Aftercare stage",
    "Vệ sinh - Theo dõi - Phục hồi": "Cleaning - Monitoring - Healing",
    "Xem chi tiết": "View details",
    "Chăm sóc lỗ xỏ sau khi xỏ khuyên": "Piercing aftercare",
    "Hướng dẫn chi tiết cách chăm sóc lỗ xỏ đúng cách, giúp lỗ xỏ nhanh lành, hạn chế viêm nhiễm và giữ được vẻ đẹp lâu dài.": "Detailed aftercare guidance to support healing, reduce infection risk, and keep your piercing looking its best.",
    "Tất cả": "All",
    "Vệ sinh lỗ xỏ": "Cleaning",
    "Dấu hiệu cần lưu ý": "Warning signs",
    "Sản phẩm chăm sóc": "Aftercare products",
    "Hỏi đáp": "Q&A",
    "11 nguyên tắc quan trọng để chăm sóc lỗ xỏ": "11 essential piercing aftercare rules",
    "11 nguyên tắc quan trọng": "11 essential rules",
    "để chăm sóc lỗ xỏ": "for piercing aftercare",
    "Bài viết tổng hợp những nguyên tắc mà bạn không nên bỏ qua.": "This guide covers the essential rules you should not overlook.",
    "Đọc bài viết": "Read article",
    "Kết quả tìm kiếm tại": "Search results in",
    "Đà Nẵng": "Da Nang",
    "Sắp xếp theo": "Sort by",
    "Đánh giá cao nhất": "Top rated",
    "Theo điểm số": "By rating",
    "Nhiều đánh giá nhất": "Most reviewed",
    "Tên A-Z": "Name A-Z",
    "Sáng (6h - 12h)": "Morning (6am - 12pm)",
    "Chiều (12h - 18h)": "Afternoon (12pm - 6pm)",
    "Tối (18h - 22h)": "Evening (6pm - 10pm)",
    "Chưa tìm thấy địa điểm phù hợp": "No matching studios found",
    "Thử chọn phường khác hoặc bỏ từ khóa tìm kiếm.": "Try another ward or remove the search term.",
    "Chưa có dữ liệu đánh giá": "No rating data",
    "Bản đồ": "Map",
    "Bản đồ ↗": "Map ↗",
    "Thông tin địa điểm": "Studio information",
    "Địa chỉ": "Address",
    "Hotline": "Phone",
    "Bài viết liên quan tại Đà Nẵng": "Related articles in Da Nang",
    "Trong bài viết": "In this article",
    "Chia sẻ bài viết": "Share article",
    "Điều quan trọng nhất": "Most important takeaway",
    "Biên tập bởi Piercing Da Nang": "Edited by Piercing Da Nang",
    "Bài viết liên quan": "Related articles",
    "Hy vọng những gợi ý trên giúp bạn có thêm thông tin để đưa ra lựa chọn phù hợp. Đừng quên tìm hiểu kỹ và ưu tiên sự an toàn trong suốt quá trình xỏ cũng như chăm sóc lỗ xỏ.": "We hope these suggestions help you make an informed choice. Research carefully and prioritize safety throughout the piercing and aftercare process.",
    "Thông tin và đánh giá được tổng hợp để bạn tham khảo trước khi đặt lịch.": "The information and reviews are compiled to help you research before booking.",
    "Nên liên hệ trực tiếp để xác nhận giờ mở cửa và loại trang sức phù hợp.": "Contact the studio directly to confirm opening hours and suitable jewelry.",
    "Cam kết": "Our commitment",
    "Thông tin chính xác, cập nhật thường xuyên": "Accurate information, updated regularly",
    "Đánh giá khách quan, minh bạch": "Objective and transparent reviews",
    "Vì cộng đồng xỏ khuyên an toàn": "Supporting a safer piercing community",
    "Liên hệ": "Contact",
    "Cung cấp thông tin về các địa điểm xỏ khuyên uy tín, kiến thức và hướng dẫn chăm sóc lỗ xỏ tại Đà Nẵng.": "Trusted studio listings, piercing knowledge, and aftercare guidance for Da Nang.",
    "Đội ngũ tổng hợp địa điểm, kiến thức và hướng dẫn chăm sóc piercing tại Đà Nẵng.": "Our team curates studio listings, piercing knowledge, and aftercare guidance in Da Nang."
    ,"Piercing Da Nang - địa điểm, xu hướng, kiến thức và cách chăm sóc lỗ xỏ tại Đà Nẵng.": "Piercing Da Nang - studios, trends, guides, and aftercare in Da Nang."
    ,"Địa điểm xỏ khuyên | Piercing Da Nang": "Piercing studios | Piercing Da Nang"
    ,"Xu hướng xỏ khuyên | Piercing Da Nang": "Piercing trends | Piercing Da Nang"
    ,"Kiến thức xỏ khuyên | Piercing Da Nang": "Piercing guide | Piercing Da Nang"
    ,"Cách chăm sóc | Piercing Da Nang": "Aftercare | Piercing Da Nang"
    ,"Kết quả tìm kiếm | Piercing Da Nang": "Search results | Piercing Da Nang"
    ,"Bài viết | Piercing Da Nang": "Article | Piercing Da Nang"
    ,"Tư vấn vị trí phù hợp với hình dáng khuôn mặt và nhu cầu cá nhân.": "Placement advice based on facial features and personal needs."
    ,"Kiểm tra tình trạng sức khỏe, dị ứng nếu có.": "Review health conditions and allergies when relevant."
    ,"Vệ sinh vùng da và dụng cụ, đảm bảo vô trùng.": "Clean the skin and instruments and maintain sterility."
    ,"Thực hiện bởi thợ xỏ chuyên nghiệp, giàu kinh nghiệm.": "Performed by an experienced professional piercer."
    ,"Sử dụng dụng cụ vô trùng, đảm bảo an toàn.": "Use sterile instruments to maintain safety."
    ,"Lựa chọn trang sức chất liệu phù hợp.": "Choose jewelry made from a suitable material."
    ,"Vệ sinh đúng cách theo hướng dẫn.": "Clean correctly according to guidance."
    ,"Tránh chạm tay, xoay hoặc tháo trang sức.": "Avoid touching, rotating, or removing jewelry."
    ,"Theo dõi tình trạng viêm nhiễm và tái khám nếu cần.": "Monitor for infection and attend follow-up care when needed."
  };

  const articles = {
    "top-tiem-xo-khuyen-hai-chau": {
      title: "Top trusted piercing studios in Hai Chau, Da Nang",
      excerpt: "A curated list of trusted piercing studios in Hai Chau, including addresses, services, and practical considerations.",
      intro: "Hai Chau is home to many piercing studios in Da Nang. This list considers expertise, customer feedback, and transparency in hygiene practices.",
      sections: [
        ["How to choose a studio", "A reliable studio should clearly explain sterilization, use single-use needles, provide transparent jewelry information, and give aftercare guidance. Online reviews help, but an in-person consultation remains important."],
        ["Dr.Emp Piercing", "The studio at 19/6 Co Giang is known for varied piercing placements and experienced piercers. Opening from 9:00am to 10:00pm also makes after-work appointments convenient."],
        ["Pama Piercing", "Pama suits clients starting their piercing journey or planning a multi-piercing ear. Its strength is placement and styling advice based on ear anatomy and personal taste."],
        ["Beo Piercing and Toothgems", "Beo combines piercing and tooth gems for clients who enjoy expressive beauty. Its space and jewelry choices make it easier to create a distinctive look."],
        ["Before booking", "Ask about jewelry material, follow-up policy, expected healing time, and what to do if unusual symptoms appear. Avoid choosing a studio based only on the lowest price."]
      ]
    },
    "kinh-nghiem-chon-tiem-xo-khuyen": {
      title: "How to choose a safe piercing studio in Da Nang",
      excerpt: "Key criteria for finding a trusted studio with strong hygiene and safety practices.",
      intro: "A good piercing experience starts with the right studio. A beautiful space helps, but sterilization and professional consultation matter more.",
      sections: [
        ["Observe hygiene practices", "The needle should be opened in front of you, work surfaces disinfected, and gloves changed at the right time. Reusable tools must be sterilized with appropriate equipment."],
        ["Check jewelry materials", "Implant-grade titanium is often a good choice for new piercings. Ask the studio to explain the material, size, and why the selected jewelry suits the placement."],
        ["Assess the consultation", "A piercer should ask about health, allergies, lifestyle, and aesthetic expectations before marking the placement. Good advice clearly explains risks and healing time."],
        ["Choose ongoing support", "Professional studios usually offer checkups, downsizing guidance, and a contact channel for concerns. Follow-up care is an important part of the service."]
      ]
    },
    "5-kieu-xo-duoc-yeu-thich": {
      title: "Five popular piercing styles right now",
      excerpt: "Five standout options, from classic to modern, to help you discover a style that suits you.",
      intro: "Current piercing trends balance personality, aftercare, and ear anatomy. A beautiful curation does not need a large number of piercings.",
      sections: [
        ["Stacked lobe", "Two or three small piercings following the lobe curve create a refined, easy-to-style look and work well for beginners."],
        ["Flat piercing", "The flat upper cartilage offers an ideal space for small ends, bright stones, or minimalist clusters."],
        ["Conch", "A conch creates a central focal point. Once healed, it can be styled with a stud or hoop and suits many aesthetics."],
        ["Double helix", "Two nearby helix piercings create a clear rhythm along the ear rim. Adequate spacing helps reduce irritation during early healing."],
        ["Curated ear", "Rather than choosing placements individually, a curated ear builds a complete composition around anatomy, proportion, and a consistent jewelry language."]
      ]
    },
    "xu-huong-xo-tai-nhieu-lo": {
      title: "Multiple ear piercings: expressive style with a personal balance",
      excerpt: "Multiple ear piercings are more than a beauty trend; they are a way to express individual style.",
      intro: "A strong multi-piercing composition should reflect both ear anatomy and everyday life. Too many new piercings at once can make aftercare difficult.",
      sections: [
        ["Start with a composition", "Define a focal point, transitions, and supporting placements so the jewelry feels intentional rather than scattered."],
        ["Plan multiple sessions", "Cartilage takes time to heal. Dividing the plan into stages makes sleeping, cleaning, and monitoring your body's response easier."],
        ["Keep a jewelry language", "Metal color, stone size, and shapes should relate to one another. One contrasting detail can be a focal point while the rest keeps the composition balanced."],
        ["Prioritize comfort", "A good style should work long term. Consider headphones, helmets, work, and sleeping habits when planning placements."]
      ]
    },
    "luu-y-khi-xo-khuyen-mui": {
      title: "Five tips for a new nose piercing",
      excerpt: "Cleaning, daily habits, and key precautions for a safer healing process.",
      intro: "Nose piercings are easy to bump and expose to cosmetics. Correct care in the first weeks helps reduce irritation and delayed healing.",
      sections: [
        ["Do not rotate the jewelry", "Rotating jewelry can pull debris into the channel and damage new tissue. Touch the piercing only with clean hands when cleaning is necessary."],
        ["Clean gently", "Use sterile 0.9% saline once or twice daily, then pat dry with a clean disposable material."],
        ["Keep cosmetics away", "Foundation, makeup remover, and skincare can collect around the jewelry. Keep them away until the tissue is stable."],
        ["Be careful when dressing", "Nose jewelry can snag on towels, tight collars, and masks. Move slowly to avoid sudden pulling."],
        ["Do not change jewelry too early", "Change jewelry only when the piercing is stable or your piercer advises it. The outside can appear healed before the inner tissue."]
      ]
    },
    "quy-trinh-xo-khuyen-an-toan": {
      title: "A safe piercing process in Da Nang",
      excerpt: "Understand the tools, techniques, and hygiene standards used during a piercing procedure.",
      intro: "A professional process should be clear from consultation and equipment preparation through aftercare guidance. Clients can ask questions at every stage.",
      sections: [
        ["Consultation and assessment", "The piercer discusses placement, health history, lifestyle, and examines the anatomy before marking."],
        ["Sterile preparation", "Jewelry, tools, and work surfaces follow infection-control procedures. A single-use needle is opened fresh."],
        ["Procedure", "The placement is confirmed again before piercing. The piercer works efficiently, installs suitable jewelry, and allows room for natural swelling."],
        ["Aftercare guidance", "Clients receive cleaning instructions, warning signs to watch for, follow-up timing, and an estimated jewelry-change date."]
      ]
    },
    "cach-cham-soc-lo-xo-dung-cach": {
      title: "How to care for a piercing correctly",
      excerpt: "Cleaning, daily habits, and important aftercare guidance.",
      intro: "Piercing aftercare does not require many products. Clean hands, moderate cleaning, and avoiding prolonged pressure or pulling matter most.",
      sections: [
        ["Clean once or twice daily", "Wash your hands, use sterile saline, and pat the area dry. Excessive cleaning can dry and irritate the skin and extend healing."],
        ["Avoid alcohol and hydrogen peroxide", "Strong antiseptics can damage healing tissue. Do not apply ointments or unapproved products on your own."],
        ["Avoid pressure", "Do not sleep on a fresh ear piercing. Clean pillowcases, headphones, and phones regularly to reduce contamination."],
        ["Monitor progress", "Mild swelling and discharge can be normal early on. Seek medical care if pain increases, redness spreads, the area feels hot, or fever develops."]
      ]
    },
    "11-nguyen-tac-cham-soc-lo-xo": {
      title: "11 essential piercing aftercare rules",
      excerpt: "Eleven rules that support healthy healing, reduce infection risk, and preserve your piercing.",
      intro: "A piercing is a small wound that can be affected by bacteria without correct care. Consistent habits and patience matter more than using many products.",
      principles: [
        "Clean the piercing regularly and correctly", "Avoid touching, rotating, or pulling the jewelry", "Do not remove or change jewelry before the piercing is stable", "Reduce impact and pressure", "Keep the piercing clean and dry", "Keep cosmetics and chemicals away", "Choose suitable jewelry materials and shapes", "Clean after exercise or exposure to dirt", "Monitor changes in the piercing", "Maintain healthy routines and nutrition", "Wait patiently for complete healing"
      ]
    },
    "ve-sinh-lo-xo-dung-cach": {
      title: "Correct piercing cleaning: what you need to know",
      excerpt: "Regular, correct cleaning helps prevent infection and supports healing.",
      intro: "A good cleaning routine is gentle, consistent, and avoids disturbing healing tissue.",
      sections: [
        ["Prepare", "Wash your hands and prepare sterile 0.9% saline with clean disposable gauze or paper towel."],
        ["Clean", "Moisten the area to soften dried matter, then remove it gently. Do not pick, pull, or rotate the jewelry."],
        ["Dry", "Pat the area fully dry after cleaning. Prolonged moisture, especially behind the ear, can cause irritation."],
        ["Frequency", "Once or twice daily is usually enough. Rinse with clean water after swimming or heavy sweating."]
      ]
    },
    "dau-hieu-lo-xo-nhiem-trung": {
      title: "Signs of an infected piercing and what to do",
      excerpt: "Recognize unusual symptoms early and respond before complications develop.",
      intro: "Not every swollen piercing is infected. Understanding normal healing, irritation, and infection helps you respond appropriately.",
      sections: [
        ["Common healing responses", "Mild redness, tenderness, and a small amount of clear discharge can be normal in the early stage."],
        ["Warning signs", "Increasing pain, spreading redness, heat, thick odorous discharge, or fever should be assessed promptly."],
        ["Do not remove jewelry yourself", "Removing jewelry during a suspected infection can close the surface while infection remains inside. Ask a piercer and healthcare professional first."],
        ["When to seek medical care", "Seek medical care if symptoms worsen quickly, affect your general health, or involve cartilage."]
      ]
    },
    "san-pham-cham-soc-lo-xo": {
      title: "Five trusted piercing aftercare products",
      excerpt: "Five common, safe, and useful product groups for piercing aftercare.",
      intro: "The best products are usually simple, clearly labeled, and non-irritating. Avoid buying many products solely because they are marketed for piercing.",
      sections: [
        ["Sterile saline", "Bottled or spray 0.9% NaCl is a basic cleaning option. Prefer a nozzle that does not touch the skin."],
        ["Non-woven gauze", "Clean disposable gauze absorbs moisture without leaving fibers like cotton wool."],
        ["Piercing pillow", "A pillow with an ear opening reduces pressure during sleep and helps people healing cartilage piercings."],
        ["Clean storage", "Keep aftercare products protected from dust, especially while traveling."],
        ["Products to avoid", "Avoid alcohol, hydrogen peroxide, essential oils, heavy ointments, and homemade solutions with uncontrolled concentration."]
      ]
    },
    "cach-thay-khuyen-an-toan": {
      title: "How to change jewelry safely after healing",
      excerpt: "Once a piercing is stable, correct jewelry changes help prevent injury and maintain healthy tissue.",
      intro: "The first jewelry change should be approached carefully. Ask a piercer for help if the placement is hard to see or the jewelry has a specialized closure.",
      sections: [
        ["Confirm healing", "No pain, swelling, discharge, and stable tissue over time are positive signs. Healing time varies by placement."],
        ["Prepare the jewelry", "Choose the right size and material and clean your hands and work surface. Avoid sharp edges or damaged plating."],
        ["Change gently", "Do not force jewelry through resistance. Stop if there is pain or bleeding and ask a professional to check it."],
        ["Monitor afterward", "Clean gently for the first few days and watch for reactions to the new material."]
      ]
    }
  };

  const shopDescriptions = {
    "Dr.Emp Piercing - Cô Giang": "A specialist piercing studio and jewelry provider offering varied placements and aftercare guidance.",
    "Pama Piercing": "A good fit for clients starting out or building a multi-piercing ear composition around their anatomy.",
    "Beo. Piercing and Toothgems": "A piercing and tooth-gem studio for clients who enjoy expressive, distinctive beauty styling.",
    "Tuấn Tattoo Studio": "A central Da Nang tattoo and piercing studio with a large number of customer reviews.",
    "Dot Dot Gem": "A piercing and jewelry studio focused on personal styling and curated ears.",
    "Bo Piercing": "A piercing-focused studio covering foundational placements and more distinctive ear accents.",
    "Bean TATTOO & PIERCING": "A combined tattoo and piercing studio for people interested in body art.",
    "Xỏ Khuyên Đà Nẵng | Piercing Da Nang": "A specialist studio offering varied placements and jewelry for both new and experienced clients.",
    "Rym's House - Xỏ khuyên Đà Nẵng": "A medical-style ear piercing studio suited to beginners and focused on hygiene and safety.",
    "X28 Ink - Tattoo - Piercing": "A tattoo and piercing studio offering multiple placements and guidance on suitable jewelry.",
    "Yotats Tattoo & Piercing": "A body-art studio offering piercing for clients seeking ear or body accents.",
    "Bấm lỗ tai / xỏ khuyên y tế tại Đà Nẵng": "A medical ear-piercing service for clients prioritizing simple procedures, hygiene, and safety.",
    "Anh Trọc Xăm - Da Nang Tattoo & Piercing": "A 24/7 tattoo and piercing studio serving a wide range of piercing needs.",
    "Grassi Piercing Da Nang": "A specialist piercing and jewelry studio with a clear, distinctive style.",
    "GROT INK - PIERCING STUDIO": "A dedicated piercing studio focused on the piercing experience rather than a broad mix of services.",
    "Danangink Tattoo & Piercing": "A tattoo and piercing studio serving local and international clients and supporting the body-art community.",
    "Poseidon Piercing & Body Jewelry": "A body piercing and jewelry specialist in Ngu Hanh Son.",
    "X28 Ink - Tattoo & Piercing": "A studio offering varied piercings and jewelry-material guidance to support healing.",
    "NYB Piercing & Accessories": "A piercing and accessories studio using individual needles and providing aftercare guidance.",
    "Dragon City Ink Tattoo & Piercing Studio": "A tattoo and body-piercing studio with strong reviews across location platforms.",
    "Nâu Xỏ Khuyên": "A studio using single-use needles and F136 titanium jewelry, with guidance for first-time clients.",
    "HiTattoo & Piercing Studio": "A tattoo and piercing studio focused on hygiene, single-use needles, and anatomy-based placement advice.",
    "Dr.Emp Piercing - Núi Thành": "A piercing and jewelry studio offering placements on the ear, nose, lip, tongue, and navel.",
    "Ron Tattoo Studio": "A tattoo and piercing studio for clients who want multiple body-art services in one place.",
    "Win.ink Tattoo - Xăm Hình, Xỏ Khuyên Đà Nẵng": "A combined tattoo and piercing studio for placements across the ears and body.",
    "Stella Tattoo & Piercing": "A combined tattoo and piercing studio for clients seeking both services at one location."
  };

  const principleText = [
    "Wash your hands before cleaning. Use sterile 0.9% saline, clean gently, and pat dry.",
    "Hands carry bacteria. Touch jewelry only when necessary and always wash first.",
    "Keep the initial jewelry in during healing. Changing too early can injure tissue and delay recovery.",
    "Avoid sleeping on the piercing, catching it while brushing hair, or applying helmet pressure.",
    "After exercise, bathing, or swimming, rinse gently and keep the area dry.",
    "Keep cleansers, shampoo, hair products, perfume, and cosmetics away from the piercing.",
    "Choose implant-grade titanium or another traceable material in a size and shape that will not snag.",
    "After dust exposure or heavy sweating, rinse with clean water and pat dry.",
    "Watch for unusual redness, swelling, heat, pain, or discharge. Do not poke, rotate, or remove jewelry on your own.",
    "Eat well, stay hydrated, sleep enough, and limit stimulants to support healing.",
    "Healing differs by person and placement. Inner tissue may still be healing even when pain has stopped."
  ];

  function translateString(value) {
    const exact = ui[value];
    if (exact) return exact;
    let match;
    if ((match = value.match(/^(\d+) tiệm xỏ khuyên tại phường (.+)$/))) return `${match[1]} piercing studios in ${match[2]} Ward`;
    if ((match = value.match(/^(\d+) tiệm xỏ khuyên tại Đà Nẵng$/))) return `${match[1]} piercing studios in Da Nang`;
    if ((match = value.match(/^\((\d+) đánh giá\)$/))) return `(${match[1]} reviews)`;
    if ((match = value.match(/^Từ ([\d.]+) sao$/))) return `${match[1]}+ stars`;
    if ((match = value.match(/^Phường (.+)$/))) return `${match[1]} Ward`;
    if ((match = value.match(/^Bài viết liên quan tại phường (.+)$/))) return `Related articles in ${match[1]} Ward`;
    if ((match = value.match(/^✦ Bài viết liên quan tại phường (.+)$/i))) return `✦ Related articles in ${match[1]} Ward`;
    if ((match = value.match(/^(.+), phường (.+)$/))) return `${match[1]}, ${match[2]} Ward`;
    if ((match = value.match(/^Dưới đây là danh sách các tiệm xỏ khuyên tại phường (.+), Đà Nẵng\. Bạn có thể xem thông tin chi tiết, đánh giá và liên hệ trực tiếp với các tiệm để được tư vấn\.$/))) return `Below is a list of piercing studios in ${match[1]} Ward, Da Nang. View details, ratings, and contact information for consultation.`;
    if ((match = value.match(/^Dưới đây là danh sách các tiệm xỏ khuyên tại phường (.+)\. Bạn có thể xem thông tin chi tiết, đánh giá và liên hệ trực tiếp với các tiệm để được tư vấn\.$/))) return `Below is a list of piercing studios in ${match[1]} Ward, Da Nang. View details, ratings, and contact information for consultation.`;
    if ((match = value.match(/^Dưới đây là danh sách các tiệm xỏ khuyên tại Đà Nẵng\. Bạn có thể xem thông tin chi tiết, đánh giá và liên hệ trực tiếp với các tiệm để được tư vấn\.$/))) return "Below is a list of piercing studios in Da Nang. View details, ratings, and contact information for consultation.";
    if ((match = value.match(/^Google Maps: xỏ khuyên(?: (.+))? Đà Nẵng$/))) return `Google Maps: piercing${match[1] ? ` in ${match[1]}` : ""}, Da Nang`;
    if (value.includes("Bài viết tổng hợp những nguyên tắc mà bạn không nên bỏ qua.")) return value.replace("Bài viết tổng hợp những nguyên tắc mà bạn không nên bỏ qua.", "This guide covers the essential rules you should not overlook.");
    return value;
  }

  function translateDOM(root = document) {
    if (lang !== "en") return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement?.closest("script, style") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const original = node.nodeValue;
      const core = original.trim();
      if (!core) return;
      const translated = translateString(core);
      if (translated !== core) node.nodeValue = original.replace(core, translated);
    });
    root.querySelectorAll?.("[placeholder]").forEach(el => el.placeholder = translateString(el.placeholder));
    root.querySelectorAll?.("[aria-label]").forEach(el => el.setAttribute("aria-label", translateString(el.getAttribute("aria-label"))));
    document.title = translateString(document.title);
  }

  function observe() {
    if (lang !== "en" || !document.body) return;
    const observer = new MutationObserver(records => {
      records.forEach(record => {
        record.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) translateDOM(node);
          else if (node.nodeType === Node.TEXT_NODE && node.parentElement) translateDOM(node.parentElement);
        });
        if (record.type === "characterData" && record.target.parentElement) translateDOM(record.target.parentElement);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function setLanguage(next) {
    localStorage.setItem("pd-language", next);
    const url = new URL(location.href);
    url.searchParams.set("lang", next);
    location.href = url.toString();
  }

  window.PD_I18N = { lang, ui, articles, shopDescriptions, principleText, t: value => lang === "en" ? translateString(value) : value, translateDOM, observe, setLanguage };
})();
