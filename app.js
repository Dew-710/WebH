const ASSET = "assets/images/";

const articles = [
  {
    slug: "top-tiem-xo-khuyen-hai-chau",
    title: "Top tiệm xỏ khuyên uy tín tại Hải Châu, Đà Nẵng",
    category: "Địa điểm",
    date: "12.06.2025",
    image: "ear-card.jpg",
    excerpt: "Tổng hợp các tiệm xỏ khuyên uy tín tại quận Hải Châu, địa chỉ, dịch vụ và những lưu ý quan trọng.",
    likes: 102,
    intro: "Hải Châu là khu vực tập trung nhiều studio piercing ở Đà Nẵng. Danh sách này được tổng hợp theo mức độ chuyên môn, phản hồi của khách hàng và sự minh bạch trong quy trình vệ sinh.",
    sections: [
      ["Tiêu chí lựa chọn", "Một tiệm xỏ khuyên đáng cân nhắc cần công khai quy trình vô trùng, sử dụng kim dùng một lần, tư vấn chất liệu trang sức rõ ràng và hướng dẫn chăm sóc sau xỏ. Đánh giá trực tuyến là nguồn tham khảo, nhưng trải nghiệm tư vấn trực tiếp vẫn rất quan trọng."],
      ["Dr.Emp Piercing", "Cơ sở tại 19/6 Cô Giang được nhiều khách hàng lựa chọn nhờ danh mục vị trí xỏ đa dạng và đội ngũ kỹ thuật viên có kinh nghiệm. Thời gian hoạt động từ 09:00 đến 22:00 thuận tiện cho khách đặt lịch sau giờ làm."],
      ["Pama Piercing", "Pama phù hợp với người muốn bắt đầu xỏ hoặc xây dựng phong cách tai nhiều lỗ. Tiệm có thế mạnh ở khâu tư vấn cách phối vị trí xỏ theo cấu trúc tai và gu cá nhân."],
      ["Beo Piercing and Toothgems", "Beo kết hợp piercing và tooth gems, hướng đến nhóm khách yêu thích phong cách làm đẹp cá tính. Không gian và lựa chọn trang sức tạo điều kiện để khách hoàn thiện một tổng thể riêng."],
      ["Lưu ý trước khi đặt lịch", "Hãy hỏi trước về chất liệu khuyên, chính sách tái khám, thời gian lành dự kiến và cách xử lý nếu xuất hiện dấu hiệu bất thường. Không nên chọn tiệm chỉ dựa trên mức giá thấp."]
    ]
  },
  {
    slug: "kinh-nghiem-chon-tiem-xo-khuyen",
    title: "Kinh nghiệm chọn tiệm xỏ khuyên an toàn tại Đà Nẵng",
    category: "Kinh nghiệm",
    date: "10.06.2025",
    image: "studio.jpg",
    excerpt: "Những tiêu chí quan trọng giúp bạn tìm được tiệm xỏ khuyên uy tín, đảm bảo vệ sinh và an toàn khi thực hiện.",
    likes: 88,
    intro: "Một trải nghiệm xỏ tốt bắt đầu từ việc chọn đúng studio. Không gian đẹp là điểm cộng, nhưng quy trình vô trùng và năng lực tư vấn mới là những yếu tố cần được ưu tiên.",
    sections: [
      ["Quan sát quy trình vệ sinh", "Kim xỏ phải được mở mới trước mặt khách, bề mặt thao tác cần được khử khuẩn và kỹ thuật viên phải thay găng đúng lúc. Dụng cụ tái sử dụng cần được hấp tiệt trùng bằng thiết bị phù hợp."],
      ["Kiểm tra chất liệu trang sức", "Titanium chuẩn cấy ghép thường là lựa chọn phù hợp cho lỗ xỏ mới. Hãy yêu cầu tiệm giải thích rõ chất liệu, kích thước và lý do mẫu khuyên được chọn phù hợp với vị trí xỏ."],
      ["Đánh giá chất lượng tư vấn", "Kỹ thuật viên cần hỏi về sức khỏe, tiền sử dị ứng, thói quen sinh hoạt và kỳ vọng thẩm mỹ trước khi đánh dấu vị trí. Một tư vấn tốt luôn nói rõ cả rủi ro lẫn thời gian hồi phục."],
      ["Ưu tiên nơi có chính sách theo dõi", "Studio chuyên nghiệp thường có lịch kiểm tra lại, hướng dẫn downsizing và kênh liên hệ khi khách gặp dấu hiệu bất thường. Đây là phần quan trọng của dịch vụ, không phải phần bổ sung."]
    ]
  },
  {
    slug: "5-kieu-xo-duoc-yeu-thich",
    title: "Top 5 kiểu xỏ mới được yêu thích hiện nay",
    category: "Xu hướng",
    date: "12.06.2025",
    image: "hero-ear.jpg",
    excerpt: "Từ những kiểu xỏ cổ điển đến hiện đại, 5 lựa chọn nổi bật giúp bạn khám phá phong cách phù hợp.",
    likes: 74,
    intro: "Xu hướng piercing hiện nay đề cao sự cân bằng giữa cá tính, khả năng chăm sóc và cấu trúc tai. Một bố cục đẹp không nhất thiết phải có thật nhiều lỗ xỏ.",
    sections: [
      ["Stacked lobe", "Hai hoặc ba lỗ xỏ nhỏ được sắp theo đường cong dái tai tạo cảm giác tinh tế và dễ phối. Đây là lựa chọn thân thiện cho người mới bắt đầu."],
      ["Flat piercing", "Vị trí phẳng ở phần sụn trên là không gian lý tưởng cho các đầu khuyên nhỏ, đá sáng hoặc cụm trang sức tối giản."],
      ["Conch", "Conch tạo điểm nhấn ở trung tâm tai. Khi đã lành, vị trí này có thể phối stud hoặc vòng ôm và phù hợp với nhiều phong cách."],
      ["Helix đôi", "Hai lỗ helix đặt gần nhau tạo nhịp điệu rõ ràng ở vành tai. Cần đủ khoảng trống để hạn chế va chạm trong thời gian đầu."],
      ["Curated ear", "Thay vì chọn từng lỗ riêng lẻ, curated ear xây dựng bố cục tổng thể dựa trên cấu trúc tai, tỉ lệ và bộ trang sức đồng nhất."]
    ]
  },
  {
    slug: "xu-huong-xo-tai-nhieu-lo",
    title: "Xu hướng xỏ tai nhiều lỗ - Phong cách cá tính, không lạc giá trị riêng",
    category: "Xu hướng",
    date: "10.06.2025",
    image: "ear-card.jpg",
    excerpt: "Xỏ nhiều lỗ tai không chỉ là xu hướng thẩm mỹ mà còn là cách thể hiện cá tính và phong cách riêng.",
    likes: 56,
    intro: "Một bố cục nhiều lỗ đẹp cần được lên kế hoạch theo cấu trúc tai và nhịp sống thực tế. Việc xỏ dồn quá nhiều vị trí cùng lúc có thể khiến quá trình chăm sóc trở nên khó khăn.",
    sections: [
      ["Bắt đầu từ một bố cục", "Hãy xác định điểm nhấn chính, vùng chuyển tiếp và các lỗ nền. Cách tiếp cận này giúp bộ khuyên có trật tự thay vì trông rời rạc."],
      ["Chia thành nhiều buổi", "Các vị trí sụn thường cần thời gian dài để lành. Chia kế hoạch thành từng giai đoạn giúp bạn ngủ, vệ sinh và theo dõi phản ứng của cơ thể dễ dàng hơn."],
      ["Giữ một ngôn ngữ trang sức", "Màu kim loại, kích thước đá và hình khối nên có mối liên hệ. Một chi tiết khác biệt có thể làm điểm nhấn, nhưng phần còn lại cần đủ yên để tổng thể cân bằng."],
      ["Ưu tiên sự thoải mái", "Phong cách tốt là phong cách có thể đồng hành lâu dài. Hãy cân nhắc tai nghe, mũ bảo hiểm, công việc và thói quen ngủ khi lên vị trí xỏ."]
    ]
  },
  {
    slug: "luu-y-khi-xo-khuyen-mui",
    title: "Top 5 lưu ý khi mới xỏ khuyên mũi",
    category: "Kiến thức",
    date: "26.06.2025",
    image: "nose.jpg",
    excerpt: "Từ cách vệ sinh, chế độ ăn uống đến những điều cần tránh giúp quá trình lành thương diễn ra an toàn.",
    likes: 132,
    intro: "Lỗ xỏ mũi nằm ở vùng dễ va chạm và tiếp xúc với mỹ phẩm. Chăm sóc đúng trong những tuần đầu giúp hạn chế kích ứng và tránh làm chậm quá trình lành.",
    sections: [
      ["Không tự xoay khuyên", "Việc xoay khuyên có thể kéo theo bụi bẩn và làm tổn thương mô non. Chỉ chạm vào vùng xỏ khi đã rửa tay và thực sự cần vệ sinh."],
      ["Vệ sinh nhẹ nhàng", "Dùng nước muối sinh lý 0,9% một đến hai lần mỗi ngày, sau đó thấm khô bằng vật liệu sạch dùng một lần."],
      ["Tránh mỹ phẩm quanh lỗ xỏ", "Kem nền, tẩy trang và sản phẩm dưỡng có thể tích tụ quanh khuyên. Giữ khoảng cách an toàn cho đến khi mô ổn định."],
      ["Cẩn thận khi thay đồ", "Khuyên mũi dễ mắc vào khăn, áo cổ nhỏ và khẩu trang. Di chuyển chậm để tránh lực kéo đột ngột."],
      ["Không thay khuyên quá sớm", "Chỉ thay trang sức khi lỗ xỏ đã ổn định hoặc theo tư vấn của kỹ thuật viên. Bề ngoài có thể lành trước phần mô bên trong."]
    ]
  },
  {
    slug: "quy-trinh-xo-khuyen-an-toan",
    title: "Quy trình xỏ khuyên an toàn tại Piercing Đà Nẵng",
    category: "Kiến thức",
    date: "08.06.2025",
    image: "process.jpg",
    excerpt: "Tìm hiểu về dụng cụ, kỹ thuật và tiêu chuẩn vệ sinh trong quá trình xỏ khuyên.",
    likes: 102,
    intro: "Quy trình xỏ chuyên nghiệp cần rõ ràng từ tư vấn, chuẩn bị dụng cụ đến hướng dẫn theo dõi sau xỏ. Khách hàng có quyền đặt câu hỏi ở mọi bước.",
    sections: [
      ["Tư vấn và kiểm tra", "Kỹ thuật viên trao đổi về vị trí, tiền sử sức khỏe, phong cách sinh hoạt và kiểm tra cấu trúc vùng xỏ trước khi đánh dấu."],
      ["Chuẩn bị vô trùng", "Trang sức, dụng cụ và bề mặt thao tác được chuẩn bị theo quy trình kiểm soát nhiễm khuẩn. Kim xỏ dùng một lần được mở mới."],
      ["Thực hiện", "Vị trí được xác nhận lại trước khi xỏ. Kỹ thuật viên thao tác dứt khoát, lắp trang sức phù hợp và kiểm tra độ thoáng cho mô sưng tự nhiên."],
      ["Hướng dẫn sau xỏ", "Khách nhận hướng dẫn vệ sinh, các dấu hiệu cần theo dõi, thời điểm kiểm tra lại và mốc dự kiến thay trang sức."]
    ]
  },
  {
    slug: "cach-cham-soc-lo-xo-dung-cach",
    title: "Cách chăm sóc lỗ xỏ khuyên đúng cách",
    category: "Cách chăm sóc",
    date: "03.06.2025",
    image: "aftercare.jpg",
    excerpt: "Hướng dẫn vệ sinh, chế độ ăn uống và những lưu ý quan trọng sau khi xỏ.",
    likes: 97,
    intro: "Chăm sóc lỗ xỏ không cần nhiều sản phẩm. Điều quan trọng nhất là giữ tay sạch, vệ sinh vừa đủ và hạn chế mọi lực kéo hoặc áp lực kéo dài lên vùng xỏ.",
    sections: [
      ["Vệ sinh 1-2 lần mỗi ngày", "Rửa tay, dùng nước muối sinh lý vô trùng và thấm khô nhẹ nhàng. Vệ sinh quá nhiều có thể làm da khô, kích ứng và kéo dài thời gian hồi phục."],
      ["Không dùng cồn hoặc oxy già", "Các chất sát khuẩn mạnh có thể gây tổn thương mô đang lành. Không tự bôi thuốc mỡ hoặc sản phẩm không được hướng dẫn."],
      ["Tránh áp lực", "Không nằm đè lên tai mới xỏ. Vệ sinh vỏ gối, tai nghe và điện thoại thường xuyên để giảm tiếp xúc với bụi bẩn."],
      ["Theo dõi tiến triển", "Sưng nhẹ và tiết dịch trong giai đoạn đầu có thể là phản ứng bình thường. Nếu đau tăng, nóng đỏ lan rộng hoặc có sốt, hãy liên hệ cơ sở y tế."]
    ]
  },
  {
    slug: "11-nguyen-tac-cham-soc-lo-xo",
    title: "11 nguyên tắc quan trọng để chăm sóc lỗ xỏ",
    category: "Cách chăm sóc",
    date: "08.06.2025",
    image: "hero-ear.jpg",
    excerpt: "11 nguyên tắc giúp lỗ xỏ khỏe mạnh, hạn chế viêm nhiễm và giữ được vẻ đẹp lâu dài.",
    likes: 146,
    intro: "Lỗ xỏ là một vết thương nhỏ, dễ bị vi khuẩn tấn công nếu không được chăm sóc đúng cách. Một thói quen ổn định và kiên nhẫn quan trọng hơn việc sử dụng quá nhiều sản phẩm.",
    principles: [
      "Vệ sinh lỗ xỏ đều đặn và đúng cách",
      "Không thường xuyên chạm tay, xoay hoặc kéo khuyên",
      "Không tự ý tháo hoặc thay khuyên khi lỗ xỏ chưa ổn định",
      "Hạn chế va chạm và áp lực lên lỗ xỏ",
      "Giữ lỗ xỏ sạch và khô thoáng",
      "Tránh để mỹ phẩm và hóa chất tiếp xúc với lỗ xỏ",
      "Lựa chọn khuyên có chất liệu và kiểu dáng phù hợp",
      "Chú ý vệ sinh sau khi vận động hoặc tiếp xúc môi trường bụi bẩn",
      "Theo dõi những thay đổi của lỗ xỏ",
      "Duy trì chế độ sinh hoạt và dinh dưỡng hợp lý",
      "Kiên nhẫn chờ lỗ xỏ hồi phục hoàn toàn"
    ]
  },
  {
    slug: "ve-sinh-lo-xo-dung-cach",
    title: "Vệ sinh lỗ xỏ đúng cách - Những điều bạn cần biết",
    category: "Vệ sinh lỗ xỏ",
    date: "08.06.2025",
    image: "aftercare.jpg",
    excerpt: "Vệ sinh lỗ xỏ thường xuyên, đúng cách giúp ngăn ngừa viêm nhiễm và hỗ trợ hồi phục.",
    likes: 89,
    intro: "Một quy trình vệ sinh tốt cần nhẹ nhàng, nhất quán và không làm gián đoạn mô đang hồi phục.",
    sections: [
      ["Chuẩn bị", "Rửa tay bằng xà phòng, chuẩn bị nước muối sinh lý vô trùng 0,9% và gạc hoặc khăn giấy sạch dùng một lần."],
      ["Làm sạch", "Làm ẩm vùng xỏ để các mảng khô mềm ra, sau đó loại bỏ nhẹ nhàng. Không cạy, kéo hoặc xoay trang sức."],
      ["Làm khô", "Thấm khô hoàn toàn sau khi vệ sinh. Độ ẩm kéo dài, đặc biệt ở mặt sau tai, có thể gây kích ứng."],
      ["Tần suất", "Một đến hai lần mỗi ngày thường là đủ. Sau khi bơi hoặc vận động ra nhiều mồ hôi, có thể rửa lại bằng nước sạch."]
    ]
  },
  {
    slug: "dau-hieu-lo-xo-nhiem-trung",
    title: "Dấu hiệu lỗ xỏ bị nhiễm trùng và cách xử lý",
    category: "Dấu hiệu cần lưu ý",
    date: "03.06.2025",
    image: "warning.jpg",
    excerpt: "Nhận biết sớm các dấu hiệu bất thường để xử lý kịp thời và tránh biến chứng.",
    likes: 114,
    intro: "Không phải mọi vết sưng đều là nhiễm trùng. Phân biệt phản ứng hồi phục, kích ứng và dấu hiệu nhiễm trùng giúp bạn xử lý đúng cách.",
    sections: [
      ["Phản ứng thường gặp", "Đỏ nhẹ, nhạy cảm và tiết một lượng nhỏ dịch trong ở giai đoạn đầu có thể là phản ứng bình thường của cơ thể."],
      ["Dấu hiệu cần chú ý", "Đau tăng dần, vùng đỏ lan rộng, nóng rõ, dịch đặc có mùi hoặc sốt là những dấu hiệu cần được đánh giá sớm."],
      ["Không tự tháo khuyên", "Tự tháo khuyên khi nghi nhiễm trùng có thể khiến bề mặt đóng lại trong khi ổ viêm còn bên trong. Hãy hỏi kỹ thuật viên và cơ sở y tế trước."],
      ["Khi nào cần đi khám", "Nếu triệu chứng nặng lên nhanh, ảnh hưởng toàn thân hoặc nằm ở vùng sụn, hãy đến cơ sở y tế để được thăm khám."]
    ]
  },
  {
    slug: "san-pham-cham-soc-lo-xo",
    title: "Top 5 sản phẩm chăm sóc lỗ xỏ được tin dùng",
    category: "Sản phẩm chăm sóc",
    date: "28.05.2025",
    image: "products.jpg",
    excerpt: "Năm nhóm sản phẩm phổ biến, an toàn và hữu ích trong quá trình chăm sóc lỗ xỏ.",
    likes: 65,
    intro: "Sản phẩm tốt nhất thường là sản phẩm đơn giản, có thành phần rõ ràng và không gây kích ứng. Không nên mua nhiều sản phẩm chỉ vì được quảng cáo cho piercing.",
    sections: [
      ["Nước muối sinh lý vô trùng", "Dung dịch NaCl 0,9% đóng chai hoặc dạng xịt là lựa chọn cơ bản để làm sạch. Ưu tiên đầu xịt không chạm trực tiếp vào da."],
      ["Gạc không dệt", "Gạc sạch dùng một lần giúp thấm khô mà không để lại xơ như bông gòn."],
      ["Gối có lỗ", "Gối chuyên dụng giảm áp lực lên tai khi ngủ, hữu ích với người có nhiều lỗ xỏ sụn."],
      ["Hộp bảo quản sạch", "Dùng để giữ sản phẩm và vật dụng chăm sóc tránh bụi bẩn, đặc biệt khi di chuyển."],
      ["Sản phẩm nào nên tránh", "Tránh cồn, oxy già, tinh dầu, thuốc mỡ đặc và các dung dịch tự pha không kiểm soát được nồng độ."]
    ]
  },
  {
    slug: "cach-thay-khuyen-an-toan",
    title: "Cách thay khuyên an toàn sau khi lỗ xỏ lành",
    category: "Vệ sinh lỗ xỏ",
    date: "20.05.2025",
    image: "process.jpg",
    excerpt: "Sau khi lỗ xỏ ổn định, thay khuyên đúng cách giúp tránh tổn thương và giữ lỗ xỏ khỏe mạnh.",
    likes: 78,
    intro: "Thay khuyên lần đầu là bước nên được thực hiện cẩn thận. Nếu vị trí khó quan sát hoặc trang sức có cơ chế khóa đặc biệt, hãy nhờ kỹ thuật viên hỗ trợ.",
    sections: [
      ["Xác nhận lỗ xỏ đã lành", "Không còn đau, sưng, tiết dịch và mô ổn định trong một thời gian là những tín hiệu tích cực. Thời gian lành khác nhau theo từng vị trí."],
      ["Chuẩn bị trang sức", "Chọn kích thước và chất liệu phù hợp, làm sạch tay và bề mặt thao tác. Không dùng trang sức có cạnh sắc hoặc lớp mạ bong tróc."],
      ["Thay nhẹ nhàng", "Không cố đẩy nếu gặp lực cản. Dừng lại khi có đau hoặc chảy máu và nhờ người có chuyên môn kiểm tra."],
      ["Theo dõi sau thay", "Vệ sinh nhẹ trong những ngày đầu và theo dõi phản ứng với chất liệu mới."]
    ]
  }
];

const shops = [
  {name:"Dr.Emp Piercing - Cô Giang", district:"Hải Châu", rating:4.9, reviews:396, address:"19/6 Cô Giang, phường Hải Châu", hours:"09:00 - 22:00", phone:"0888 815 539", social:"Dr.Emp Piercing", facebook:"https://www.facebook.com/dremppiercing", maps:"https://maps.app.goo.gl/fr6yWXnkEnZrD7Le7", image:"assets/source-media/image3.jpeg", description:"Cơ sở chuyên xỏ khuyên và cung cấp trang sức piercing, có nhiều vị trí xỏ và tư vấn chăm sóc sau xỏ."},
  {name:"Pama Piercing", district:"Hải Châu", rating:5.0, reviews:83, address:"11A Trần Bình Trọng, phường Hải Châu", hours:"09:30 - 20:30", phone:"0987 568 192", social:"Xỏ khuyên Đà Nẵng - Pama piercing", facebook:"https://www.facebook.com/pama.piercing", maps:"https://maps.app.goo.gl/aeQxz7HKfwPSbsyo8", image:"assets/source-media/image4.jpeg", description:"Phù hợp với khách muốn bắt đầu xỏ hoặc xây dựng phong cách tai nhiều lỗ theo cấu trúc riêng."},
  {name:"Beo. Piercing and Toothgems", district:"Hải Châu", rating:5.0, reviews:33, address:"87/2 Nguyễn Văn Linh, phường Hải Châu", hours:"10:00 - 19:30", phone:"0935 769 076", social:"Beo.piercing", facebook:"https://www.facebook.com/beopiercing", maps:"https://maps.app.goo.gl/NwnqUjC8eYBmbeFo6", image:"assets/source-media/image9.jpeg", description:"Địa chỉ kết hợp xỏ khuyên và tooth gems dành cho khách yêu thích phong cách làm đẹp cá tính."},
  {name:"Tuấn Tattoo Studio", district:"Hải Châu", rating:4.9, reviews:395, address:"101A Nguyễn Chí Thanh, phường Hải Châu", hours:"09:00 - 19:00", phone:"0935 239 539", social:"Tuấn TATTOO - Xăm Hình Nghệ Thuật Đà Nẵng", facebook:"https://www.facebook.com/tuantattoodanang", maps:"https://maps.app.goo.gl/FHoDbeMLA1tfLjBz5", image:"assets/source-media/image10.jpeg", description:"Studio xăm hình nghệ thuật kết hợp piercing tại trung tâm thành phố, có lượng đánh giá lớn."},
  {name:"Dot Dot Gem", district:"Hải Châu", rating:5.0, reviews:283, address:"25 Nguyễn Văn Linh, phường Hải Châu", hours:"08:30 - 21:00", phone:"0346 086 899", social:"Dot Dot Gem", facebook:"https://www.facebook.com/dotdotgem", maps:"https://maps.app.goo.gl/AMgoDLVSgy7rj4et7", image:"assets/source-media/image15.jpeg", description:"Địa chỉ chuyên về xỏ khuyên và trang sức, phù hợp với phong cách cá nhân và phối tai."},
  {name:"Bo Piercing", district:"Cẩm Lệ", rating:5.0, reviews:6, address:"K200/30/16 Ông Ích Đường, phường Cẩm Lệ", hours:"10:00 - 23:00", phone:"0905 612 344", social:"Bo piercing - Xỏ Khuyên Đà Nẵng", facebook:"https://www.facebook.com/profile.php?id=100085348746431", maps:"https://maps.app.goo.gl/Y3Ab92n1mwc98USWA", image:"assets/source-media/image18.jpeg", description:"Tiệm tập trung vào dịch vụ piercing từ các vị trí cơ bản đến những kiểu xỏ tạo điểm nhấn."},
  {name:"Bean TATTOO & PIERCING", district:"Cẩm Lệ", rating:null, reviews:null, address:"11 Đỗ Thúc Tịnh, phường Cẩm Lệ", hours:"08:00 - 20:00", phone:"0905 983 345", social:"Bean Tattoo & Piercing", facebook:"https://www.facebook.com/profile.php?id=61550832030362", maps:"https://maps.app.goo.gl/gU6UkZ7FqaBdPjd1A", image:"assets/source-media/image24.jpeg", description:"Studio kết hợp tattoo và piercing, phù hợp với những người yêu thích phong cách body art."},
  {name:"Xỏ Khuyên Đà Nẵng | Piercing Da Nang", district:"Thanh Khê", rating:5.0, reviews:45, address:"270 Trần Cao Vân, phường Thanh Khê", hours:"09:00 - 20:00", phone:"0935 724 421", social:"Xỏ Khuyên Đà Nẵng | Da Nang Piercing", facebook:"https://www.facebook.com/DaNangPiercing", maps:"https://maps.app.goo.gl/3CUL1SpcSdmmK41a6", image:"assets/source-media/image25.jpeg", description:"Cơ sở chuyên về xỏ khuyên với nhiều vị trí và mẫu trang sức, phù hợp cả người mới lẫn khách muốn xỏ thêm."},
  {name:"Rym's House - Xỏ khuyên Đà Nẵng", district:"Thanh Khê", rating:5.0, reviews:85, address:"118 Lý Thái Tổ, phường Thanh Khê", hours:"09:00 - 21:30", phone:"0963 523 716", social:"Rym's House - Xỏ khuyên Y Tế Huế và Đà Nẵng", facebook:"https://www.facebook.com/bamlotaichuanyte", maps:"https://maps.app.goo.gl/yo7cVXUWiBNFR5wr6", image:"assets/source-media/image27.jpeg", description:"Địa chỉ xỏ khuyên và bấm lỗ tai phù hợp với người mới, chú trọng vệ sinh và an toàn."},
  {name:"X28 Ink - Tattoo - Piercing", district:"Thanh Khê", rating:4.9, reviews:27, address:"31/12 Huỳnh Ngọc Huệ, phường Thanh Khê", hours:"09:00 - 21:00", phone:"0782 115 409", social:"X28 Ink - Tattoo - Piercing cơ sở 1", facebook:"https://www.facebook.com/profile.php?id=61558403788887", maps:"https://maps.app.goo.gl/C67nkZdVo3EvFYCq6", image:"assets/source-media/image30.jpeg", description:"Cơ sở xăm hình và xỏ khuyên, thực hiện nhiều vị trí piercing và tư vấn loại khuyên phù hợp."},
  {name:"Yotats Tattoo & Piercing", district:"An Khê", rating:4.9, reviews:47, address:"66 Đặng Như Mai, phường An Khê", hours:"Luôn mở cửa", phone:"0336 606 439", social:"Yo Tattoo & Piercing", facebook:"https://www.facebook.com/share/1BvWdh53XG/", maps:"https://maps.app.goo.gl/YpFAQ5QWfJc3W4N47", image:"assets/source-media/image33.jpeg", description:"Địa chỉ body art có dịch vụ piercing dành cho khách muốn tạo điểm nhấn trên tai hoặc cơ thể."},
  {name:"Bấm lỗ tai / xỏ khuyên y tế tại Đà Nẵng", district:"An Khê", rating:5.0, reviews:7, address:"18 Trường Chinh, phường An Khê", hours:"09:00 - 19:30; Chủ nhật 07:30 - 19:00", phone:"0972 344 239", social:"", facebook:"", maps:"https://maps.app.goo.gl/kaf84gikukZ3RH9u5", image:"assets/source-media/image34.png", description:"Địa chỉ chuyên bấm lỗ tai và xỏ khuyên y tế, phù hợp với khách ưu tiên vệ sinh và an toàn."},
  {name:"Anh Trọc Xăm - Da Nang Tattoo & Piercing", district:"An Hải", rating:5.0, reviews:56, address:"266/17 Dương Đình Nghệ, phường An Hải", hours:"Luôn mở cửa", phone:"0988 635 638", social:"Anh Trọc Xăm - Da Nang Tattoo & Piercing", facebook:"https://www.facebook.com/share/1CfXCWZeVi/", maps:"https://www.google.com/maps/search/?api=1&query=Anh+Troc+Xam+Da+Nang", image:"assets/source-media/image35.jpeg", description:"Studio tattoo kết hợp piercing, hoạt động 24/7 và phục vụ nhiều nhu cầu xỏ khác nhau."},
  {name:"Grassi Piercing Da Nang", district:"An Hải", rating:5.0, reviews:38, address:"37-39 Mỹ Khê 1, phường An Hải", hours:"11:00 - 20:00", phone:"0367 541 174", social:"G r a s s i . P i e r c i n g", facebook:"https://www.facebook.com/grassipiercing", maps:"https://www.google.com/maps/search/?api=1&query=Grassi+Piercing+Da+Nang", image:"assets/source-media/image39.jpeg", description:"Studio chuyên sâu vào piercing và trang sức, xây dựng phong cách riêng rõ nét."},
  {name:"GROT INK - PIERCING STUDIO", district:"Sơn Trà", rating:5.0, reviews:33, address:"286 Bùi Huy Bích, phường Sơn Trà", hours:"07:30 - 22:30", phone:"0937 240 604", social:"Grot Piercing Studio", facebook:"https://www.facebook.com/profile.php?id=61572826952879", maps:"https://maps.app.goo.gl/FwG5Ypn4YkiStawY7", image:"assets/source-media/image42.jpeg", description:"Piercing Studio tập trung vào trải nghiệm xỏ khuyên thay vì kết hợp quá nhiều loại hình dịch vụ."},
  {name:"Danangink Tattoo & Piercing", district:"Ngũ Hành Sơn", rating:5.0, reviews:372, address:"90 Hói Kiểng 11, phường Ngũ Hành Sơn", hours:"09:00 - 19:00", phone:"039 782 9405", social:"Danangink Tattoo - Tiệm Xăm Đà Nẵng", facebook:"https://www.facebook.com/dananginktattoo/", maps:"https://maps.app.goo.gl/kQ6CDUfcqtoR5KrS7", website:"https://danangtattoo.ink/", image:"assets/source-media/image44.jpeg", description:"Studio tattoo và piercing phục vụ cả khách địa phương lẫn quốc tế, đồng thời xây dựng cộng đồng body art."},
  {name:"Poseidon Piercing & Body Jewelry", district:"Ngũ Hành Sơn", rating:4.9, reviews:208, address:"63 Trần Khánh Dư, phường Ngũ Hành Sơn", hours:"10:00 - 20:00; cuối tuần đến 21:00", phone:"0927 214 720", social:"Poseidon Piercing & Body Jewelry", facebook:"https://www.facebook.com/Poseidon.piecing.bodyjewelry/", maps:"https://maps.app.goo.gl/z1QnoBo9RH7PZSiQ9", image:"assets/source-media/image46.jpeg", description:"Cơ sở chuyên xỏ khuyên cơ thể và kinh doanh trang sức body jewelry tại khu vực Ngũ Hành Sơn."},
  {name:"X28 Ink - Tattoo & Piercing", district:"Ngũ Hành Sơn", rating:5.0, reviews:238, address:"69 Phan Tôn, phường Ngũ Hành Sơn", hours:"09:00 - 20:00", phone:"0782 115 409", social:"X28 ink - tattoo & piercing", facebook:"https://www.facebook.com/x28ink/", maps:"https://maps.app.goo.gl/EmfZU9DrigvEmgsk7", image:"assets/source-media/image49.jpeg", description:"Cơ sở thực hiện nhiều kiểu piercing và tư vấn chất liệu khuyên phù hợp để hỗ trợ quá trình lành."},
  {name:"NYB Piercing & Accessories", district:"Ngũ Hành Sơn", rating:4.8, reviews:39, address:"34 Mỹ An 1, phường Ngũ Hành Sơn", hours:"09:00 - 20:00", phone:"0935 186 156", social:"NYB Piercing & Accessories", facebook:"https://www.facebook.com/p/NYB-PiercingAccesories-61566163592156/", maps:"https://maps.app.goo.gl/DNUdFPu2TuWsWysB9", image:"assets/source-media/image52.jpeg", description:"Cơ sở chuyên xỏ khuyên và phụ kiện, dùng kim riêng cho mỗi khách và có hướng dẫn chăm sóc sau xỏ."},
  {name:"Dragon City Ink Tattoo & Piercing Studio", district:"Ngũ Hành Sơn", rating:5.0, reviews:462, address:"37-39 An Thượng 32, phường Ngũ Hành Sơn", hours:"10:00 - 20:00", phone:"0867 916 880", social:"Dragon City Ink", facebook:"https://www.facebook.com/share/19aCwstabG/", maps:"https://maps.app.goo.gl/Hc4r6uddDqjmHn5g6", image:"assets/source-media/image55.jpeg", description:"Cơ sở xăm hình nghệ thuật và xỏ khuyên cơ thể có nhiều đánh giá tích cực trên nền tảng địa điểm."},
  {name:"Nâu Xỏ Khuyên", district:"Hòa Khánh", rating:5.0, reviews:11, address:"260 Tô Hiệu, phường Hòa Khánh", hours:"09:30 - 21:00", phone:"0905 081 644", social:"Nâu xỏ khuyên", facebook:"https://www.facebook.com/p/N%C3%A2u-x%E1%BB%8F-khuy%C3%AAn-61563602769688/", maps:"https://maps.app.goo.gl/Ae21TQfQqTKChFiS6", image:"assets/source-media/image58.jpeg", description:"Tiệm sử dụng kim y tế một lần, trang sức titanium F136 và tư vấn chăm sóc cho cả khách mới."},
  {name:"HiTattoo & Piercing Studio", district:"Hòa Khánh", rating:5.0, reviews:8, address:"62 Ngô Thì Nhậm, phường Hòa Khánh", hours:"09:00 - 21:00", phone:"0763 396 944", social:"", facebook:"", maps:"https://maps.app.goo.gl/5ZmkG34hXz3CCz427", image:"assets/source-media/image61.png", description:"Cơ sở xỏ khuyên và xăm hình chú trọng vệ sinh, dùng kim một lần và tư vấn theo cấu trúc tai."},
  {name:"Dr.Emp Piercing - Núi Thành", district:"Hòa Cường", rating:4.9, reviews:1224, address:"186 Núi Thành, phường Hòa Cường", hours:"09:00 - 22:00", phone:"0866 999 961", social:"Dr.Emp Piercing", facebook:"https://www.facebook.com/share/19TYKkjvXb/", maps:"https://share.google/uudcyC1LEnxdh0m2T", image:"assets/source-media/image65.jpeg", description:"Cơ sở chuyên xỏ khuyên và trang sức với nhiều vị trí trên tai, mũi, môi, lưỡi và rốn."},
  {name:"Ron Tattoo Studio", district:"Hòa Cường", rating:5.0, reviews:41, address:"33 Hóa Quê Trung, phường Hòa Cường", hours:"Mở cả ngày", phone:"0935 432 844", social:"Xăm Hình Nghệ Thuật Đà Nẵng - Ron Tattoo Studio", facebook:"https://www.facebook.com/share/1D1mBpGws3/", maps:"https://share.google/yBIotPdB8doAAoOqp", image:"assets/source-media/image68.jpeg", description:"Cơ sở xăm hình nghệ thuật và xỏ khuyên, phục vụ khách muốn kết hợp nhiều loại hình body art."},
  {name:"Win.ink Tattoo - Xăm Hình, Xỏ Khuyên Đà Nẵng", district:"Hòa Cường", rating:5.0, reviews:52, address:"49 Dương Bá Trạc, phường Hòa Cường", hours:"09:00 - 20:00", phone:"0779 191 198", social:"Win.ink Tattoo", facebook:"https://www.facebook.com/share/1BqsFCRi9G/", maps:"https://share.google/b4bWO2y7yFwXmfpeM", image:"assets/source-media/image71.jpeg", description:"Studio kết hợp xăm hình và xỏ khuyên ở nhiều vị trí trên tai và cơ thể."},
  {name:"Stella Tattoo & Piercing", district:"Hòa Cường", rating:5.0, reviews:20, address:"610 Núi Thành, phường Hòa Cường", hours:"09:00 - 21:00", phone:"0963 306 847", social:"Stella Tattoo & Piercing", facebook:"https://www.facebook.com/share/1BfbnZMUNm/", maps:"https://share.google/SFkWQ2GkO5h4bfEgg", image:"assets/source-media/image74.jpeg", description:"Studio kết hợp tattoo và piercing, phù hợp với khách muốn tìm cả hai dịch vụ tại cùng một địa chỉ."}
];

const districts = ["Hải Châu", "Cẩm Lệ", "Thanh Khê", "An Khê", "An Hải", "Sơn Trà", "Ngũ Hành Sơn", "Hòa Khánh", "Hòa Cường"];
const i18n = window.PD_I18N;
const t = value => i18n?.t(value) || value;

if (i18n?.lang === "en") {
  articles.forEach(article => {
    const translated = i18n.articles[article.slug];
    if (!translated) return;
    article.title = translated.title;
    article.excerpt = translated.excerpt;
    article.intro = translated.intro;
    if (translated.sections) article.sections = translated.sections.map(section => [...section]);
    if (translated.principles) article.principles = [...translated.principles];
  });
  shops.forEach(shop => {
    if (i18n.shopDescriptions[shop.name]) shop.description = i18n.shopDescriptions[shop.name];
  });
}

const page = document.body.dataset.page;

function articleUrl(slug) { return `article.html?slug=${encodeURIComponent(slug)}`; }

function icon(name) {
  const paths = {
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle>',
    clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 13 13 0 0 0 2.9.7 2 2 0 0 1 1.6 1.9Z"></path>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path>',
    arrow: '<path d="M5 12h14M14 7l5 5-5 5"></path>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>',
    close: '<path d="m6 6 12 12M18 6 6 18"></path>',
    check: '<path d="m5 12 4 4L19 6"></path>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M16 3v4M8 3v4M3 10h18"></path>'
  };
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
}

function renderHeader() {
  const nav = [
    ["home", "Trang chủ", "index.html"],
    ["locations", "Địa điểm xỏ khuyên", "locations.html"],
    ["trends", "Xu hướng", "trends.html"],
    ["knowledge", "Kiến thức xỏ khuyên", "knowledge.html"],
    ["care", "Cách chăm sóc", "care.html"]
  ];
  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="Piercing Da Nang - Trang chủ"><img src="${ASSET}logo.jpeg" alt="Piercing Da Nang"></a>
        <nav class="desktop-nav" aria-label="Điều hướng chính">
          ${nav.map(([key,label,url]) => `<a class="${page===key ? "active" : ""}" href="${url}">${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <div class="language-switch" role="group" aria-label="Language"><button type="button" data-language="vi" class="${i18n?.lang === "vi" ? "active" : ""}" aria-pressed="${i18n?.lang === "vi"}">VI</button><button type="button" data-language="en" class="${i18n?.lang === "en" ? "active" : ""}" aria-pressed="${i18n?.lang === "en"}">EN</button></div>
          <button class="icon-button" id="searchOpen" aria-label="Mở tìm kiếm">${icon("search")}</button>
          <button class="icon-button menu-button" id="menuToggle" aria-label="Mở menu" aria-expanded="false">${icon("menu")}</button>
        </div>
      </div>
      <div class="mobile-panel" id="mobilePanel">${nav.map(([key,label,url]) => `<a class="${page===key ? "active" : ""}" href="${url}">${label}</a>`).join("")}</div>
    </header>
    <div class="search-overlay" id="searchOverlay" aria-hidden="true">
      <div class="search-dialog" role="dialog" aria-modal="true" aria-label="Tìm kiếm">
        <button class="icon-button search-close" id="searchClose" aria-label="Đóng tìm kiếm">${icon("close")}</button>
        <p class="eyebrow">Tìm trong Piercing Da Nang</p>
        <form action="search.html" class="global-search">
          ${icon("search")}<input name="q" type="search" placeholder="Tên tiệm, địa chỉ, bài viết..." autofocus><button type="submit">Tìm kiếm ${icon("arrow")}</button>
        </form>
        <div class="quick-links"><a href="article.html?slug=11-nguyen-tac-cham-soc-lo-xo">Chăm sóc lỗ xỏ</a><a href="locations.html">Tiệm uy tín</a><a href="trends.html">Xu hướng mới</a></div>
      </div>
    </div>`;
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand"><img src="${ASSET}logo.jpeg" alt="Piercing Da Nang"><p>Cung cấp thông tin về các địa điểm xỏ khuyên uy tín, kiến thức và hướng dẫn chăm sóc lỗ xỏ tại Đà Nẵng.</p></div>
        <div><h3>Cam kết</h3><p>${icon("check")}Thông tin chính xác, cập nhật thường xuyên</p><p>${icon("check")}Đánh giá khách quan, minh bạch</p><p>${icon("check")}Vì cộng đồng xỏ khuyên an toàn</p></div>
        <div><h3>Liên hệ</h3><p>${icon("phone")}0936 641 678</p><p>${icon("mail")}piercingdanang@gmail.com</p><p>${icon("pin")}52 Trần Đại Nghĩa, Ngũ Hành Sơn, Đà Nẵng</p></div>
      </div>
      <div class="container footer-bottom"><span>© 2025 Piercing Đà Nẵng. All rights reserved.</span><em>Piercing in Da Nang ♡</em></div>
    </footer>`;
}

function card(article, extraClass="") {
  return `<article class="article-card ${extraClass}">
    <a class="card-media" href="${articleUrl(article.slug)}"><img src="${ASSET}${article.image}" alt="${article.title}"><span>${article.category}</span></a>
    <div class="card-body">
      <time>${article.date}</time>
      <h3><a href="${articleUrl(article.slug)}">${article.title}</a></h3>
      <p>${article.excerpt}</p>
      <div class="card-foot"><a class="text-link" href="${articleUrl(article.slug)}">Đọc thêm ${icon("arrow")}</a><span>${icon("heart")} ${article.likes}</span></div>
    </div>
  </article>`;
}

function sectionHeading(title, link="", label="Xem tất cả bài viết") {
  return `<div class="section-heading"><h2>${title}</h2>${link ? `<a class="text-link" href="${link}">${label} ${icon("arrow")}</a>` : ""}</div>`;
}

function hero(title, subtitle, kicker, variant="") {
  return `<section class="page-hero ${variant}"><div class="container hero-grid"><div class="hero-copy"><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${subtitle}</p></div><div class="hero-image"><img src="${ASSET}hero-ear.jpg" alt="Tai đeo nhiều mẫu khuyên bạc"><span>Small piercings<br>Big personality ♡</span></div></div></section>`;
}

function breadcrumb(items) {
  return `<nav class="breadcrumb" aria-label="Đường dẫn"><a href="index.html">Trang chủ</a>${items.map((item, i) => `<span>›</span>${i === items.length-1 ? `<b>${item[0]}</b>` : `<a href="${item[1]}">${item[0]}</a>`}`).join("")}</nav>`;
}

function renderHome() {
  const featured = [articles[0], articles[1]];
  const mapLanguage = i18n?.lang === "en" ? "en" : "vi";
  const initialMapQuery = encodeURIComponent(i18n?.lang === "en" ? "piercing Da Nang" : "xỏ khuyên Đà Nẵng");
  document.getElementById("app").innerHTML = `
    <section class="home-hero">
      <div class="container home-hero-grid">
        <div class="home-copy"><p class="eyebrow">Khám phá các địa điểm xỏ khuyên tại Đà Nẵng</p><h1>Xỏ khuyên<br>Đà Nẵng<span>✦</span></h1><p>Tìm kiếm các tiệm xỏ khuyên uy tín, khám phá xu hướng mới nhất và trang bị kiến thức, cách chăm sóc lỗ xỏ an toàn, đúng cách.</p></div>
        <div class="home-photo"><img src="${ASSET}hero-ear.jpg" alt="Mẫu phối nhiều khuyên tai"><span>Small piercings<br>Big personality ♡</span></div>
      </div>
    </section>
    <section class="section map-section" id="map-section">
      <div class="container">
        <div class="intro-row"><div class="pin-mark">${icon("pin")}</div><div><h2>Tìm tiệm xỏ khuyên gần bạn</h2><p>Khám phá các tiệm xỏ khuyên tại Đà Nẵng thông qua bản đồ. Chọn phường bạn muốn tìm kiếm để xem danh sách trong khu vực.</p></div></div>
        <div class="map-grid">
          <div class="map-visual google-map-frame"><iframe id="googleMapEmbed" class="google-map-embed" title="Google Maps các tiệm xỏ khuyên tại Đà Nẵng" src="https://www.google.com/maps?q=${initialMapQuery}&z=12&output=embed&hl=${mapLanguage}" loading="eager" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe><a class="google-map-open" id="googleMapOpen" href="https://www.google.com/maps/search/?api=1&query=${initialMapQuery}" target="_blank" rel="noopener noreferrer">Mở Google Maps ↗</a></div>
          <form class="map-filter" id="mapFilterForm" action="search.html">
            <label class="search-field">${icon("search")}<input id="mapSearch" type="search" name="q" placeholder="Tìm theo tên tiệm, địa chỉ..."></label>
            <label><span>${icon("pin")}Phường</span><select id="mapDistrict" name="district"><option value="">Tất cả phường</option>${districts.map(d=>`<option>${d}</option>`).join("")}</select></label>
            <label><span>★ Đánh giá</span><select id="mapRating" name="rating"><option value="">Tất cả đánh giá</option><option value="5">Từ 5 sao</option><option value="4.9">Từ 4.9 sao</option></select></label>
            <label><span>${icon("clock")}Giờ mở cửa</span><select id="mapOpen" name="open"><option value="">Tất cả khung giờ</option><option value="morning">Buổi sáng</option><option value="evening">Buổi tối</option></select></label>
            <button class="button" type="submit">Áp dụng ${icon("arrow")}</button>
            <div class="map-note" id="mapNote">⌖ <em>Google Maps hiển thị các tiệm phù hợp</em></div>
          </form>
        </div>
      </div>
    </section>
    <section class="section compact-top"><div class="container">${sectionHeading("Địa điểm xỏ khuyên Đà Nẵng", "locations.html")}
      <p class="section-lead">Bài viết, đánh giá và kinh nghiệm chọn tiệm theo từng khu vực.</p>
      <div class="grid two">${featured.map(a=>card(a,"feature-card")).join("")}</div>
    </div></section>
    <section class="section explore-section"><div class="container">${sectionHeading("✦ Khám phá thêm về xỏ khuyên")}
      <div class="grid three explore-grid">
        <a href="trends.html" class="explore-card"><img src="${ASSET}ear-card.jpg" alt="Xu hướng xỏ khuyên"><span>Xu hướng</span><h3>Xu hướng xỏ khuyên</h3><p>Cập nhật những kiểu xỏ khuyên được yêu thích và cách phối khuyên thể hiện cá tính riêng.</p><b>Xem thêm ${icon("arrow")}</b></a>
        <a href="knowledge.html" class="explore-card"><img src="${ASSET}process.jpg" alt="Kiến thức xỏ khuyên"><span>Kiến thức</span><h3>Kiến thức xỏ khuyên</h3><p>Tìm hiểu quy trình xỏ khuyên, các vị trí phổ biến và những điều cần biết trước khi xỏ.</p><b>Xem thêm ${icon("arrow")}</b></a>
        <a href="care.html" class="explore-card"><img src="${ASSET}aftercare.jpg" alt="Cách chăm sóc"><span>Cách chăm sóc</span><h3>Cách chăm sóc</h3><p>Hướng dẫn vệ sinh, chăm sóc lỗ xỏ và phòng tránh biến chứng.</p><b>Xem thêm ${icon("arrow")}</b></a>
      </div>
      <a href="locations.html" class="city-banner"><div><em>Sẵn sàng khám phá</em><h3>Phong cách của bạn?</h3><p>Tìm kiếm tiệm xỏ khuyên phù hợp và bắt đầu hành trình khám phá cá tính riêng tại Đà Nẵng.</p></div><img src="${ASSET}city.jpg" alt="Cầu Rồng Đà Nẵng"></a>
    </div></section>`;
}

function renderLocations() {
  renderDirectory(true);
}

function renderTrends() {
  document.getElementById("app").innerHTML = `
    ${hero("Xu hướng xỏ khuyên<br>mới nhất", "Cập nhật những kiểu xỏ khuyên hot nhất hiện nay, cách phối khuyên cá tính và gợi ý phong cách phù hợp với bạn.", "✦ Xu hướng xỏ khuyên", "trend-hero")}
    <section class="section"><div class="container">${breadcrumb([["Xu hướng", "trends.html"]])}
      <div class="grid two narrow-grid">${[articles[2],articles[3]].map(card).join("")}</div>
      ${sectionHeading("Khám phá thêm")}
      <div class="grid two narrow-grid">${[articles[4],articles[6]].map(card).join("")}</div>
    </div></section>`;
}

function renderKnowledge() {
  const stages = [
    ["01", "Giai đoạn chuẩn bị", "Tư vấn - Kiểm tra - Vệ sinh", "prep.jpg", ["Tư vấn vị trí phù hợp với hình dáng khuôn mặt và nhu cầu cá nhân.", "Kiểm tra tình trạng sức khỏe, dị ứng nếu có.", "Vệ sinh vùng da và dụng cụ, đảm bảo vô trùng."], articles[4].slug],
    ["02", "Giai đoạn thực hiện", "Xỏ khuyên", "process.jpg", ["Thực hiện bởi thợ xỏ chuyên nghiệp, giàu kinh nghiệm.", "Sử dụng dụng cụ vô trùng, đảm bảo an toàn.", "Lựa chọn trang sức chất liệu phù hợp."], articles[5].slug],
    ["03", "Giai đoạn chăm sóc", "Vệ sinh - Theo dõi - Phục hồi", "hero-ear.jpg", ["Vệ sinh đúng cách theo hướng dẫn.", "Tránh chạm tay, xoay hoặc tháo trang sức.", "Theo dõi tình trạng viêm nhiễm và tái khám nếu cần."], articles[6].slug]
  ];
  document.getElementById("app").innerHTML = `
    ${hero("Xỏ khuyên<br><em>có mấy giai đoạn?</em>", "Từ chuẩn bị - thực hiện - chăm sóc, hiểu đúng quy trình để có trải nghiệm an toàn và kết quả đẹp nhất.", "✦ Kiến thức xỏ khuyên", "knowledge-hero")}
    <section class="section"><div class="container">${breadcrumb([["Kiến thức xỏ khuyên", "knowledge.html"]])}
      <div class="grid three stage-grid">${stages.map(s=>`<article class="stage-card"><div class="stage-head"><b>${s[0]}</b><div><h3>${s[1]}</h3><p>${s[2]}</p></div></div><img src="${ASSET}${s[3]}" alt="${s[1]}"><ul>${s[4].map(i=>`<li>${icon("check")}${i}</li>`).join("")}</ul><a class="button" href="${articleUrl(s[5])}">Xem chi tiết ${icon("arrow")}</a></article>`).join("")}</div>
      ${sectionHeading("Bài viết liên quan")}
      <div class="grid four">${[articles[4],articles[5],articles[6],articles[2]].map(card).join("")}</div>
    </div></section>`;
}

function renderCare() {
  const careArticles = [articles[8], articles[9], articles[10], articles[6], articles[11], articles[7]];
  document.getElementById("app").innerHTML = `
    ${hero("Chăm sóc lỗ xỏ<br>sau khi xỏ khuyên", "Hướng dẫn chi tiết cách chăm sóc lỗ xỏ đúng cách, giúp lỗ xỏ nhanh lành, hạn chế viêm nhiễm và giữ được vẻ đẹp lâu dài.", "Cách chăm sóc", "care-hero")}
    <section class="section care-content"><div class="container">
      <div class="filter-chips" role="group" aria-label="Lọc bài chăm sóc"><button class="active" data-filter="all">Tất cả</button><button data-filter="Vệ sinh lỗ xỏ">Vệ sinh lỗ xỏ</button><button data-filter="Dấu hiệu cần lưu ý">Dấu hiệu cần lưu ý</button><button data-filter="Sản phẩm chăm sóc">Sản phẩm chăm sóc</button><button data-filter="Cách chăm sóc">Hỏi đáp</button></div>
      <a class="care-feature" href="${articleUrl(articles[7].slug)}"><img src="${ASSET}hero-ear.jpg" alt="Chăm sóc lỗ xỏ"><div><h2>11 nguyên tắc quan trọng<br>để chăm sóc lỗ xỏ</h2><p>${articles[7].excerpt} Bài viết tổng hợp những nguyên tắc mà bạn không nên bỏ qua.</p><span class="text-link">Đọc bài viết ${icon("arrow")}</span></div></a>
      ${sectionHeading("Bài viết liên quan", "article.html?slug=11-nguyen-tac-cham-soc-lo-xo")}
      <div class="grid three care-grid" id="careGrid">${careArticles.map(card).join("")}</div>
    </div></section>`;
}

function renderSearch() {
  renderDirectory(false);
}

function renderDirectory(compact = false) {
  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";
  const initialRating = params.get("rating") || "";
  const initialOpen = params.get("open") || "";
  const district = params.get("district") || (query ? "" : "Hải Châu");
  const districtLabel = district ? `phường ${district}` : "Đà Nẵng";
  document.getElementById("app").innerHTML = `
    ${compact ? "" : `<section class="search-hero"><div class="container">${breadcrumb([["Địa điểm xỏ khuyên","locations.html"],[district ? `Phường ${district}` : "Toàn Đà Nẵng",""]])}<p class="eyebrow">${icon("pin")} Kết quả tìm kiếm tại</p><h1>${district ? `Phường ${district}` : "Đà Nẵng"}</h1><p>Dưới đây là danh sách các tiệm xỏ khuyên tại ${districtLabel}. Bạn có thể xem thông tin chi tiết, đánh giá và liên hệ trực tiếp với các tiệm để được tư vấn.</p></div><img src="${ASSET}map-danang.jpg" alt="Bản đồ khu vực"></section>`}
    <section class="section search-results ${compact ? "directory-main" : ""}"><div class="container search-layout">
      <aside class="filter-sidebar"><h3>Phường</h3><label>${icon("pin")}<select id="districtSelect"><option value="" ${!district?"selected":""}>Tất cả phường</option>${districts.map(d=>`<option ${district===d?"selected":""}>${d}</option>`).join("")}</select></label><hr><h3>Giờ mở cửa</h3><label><input type="checkbox" name="time" value="morning" ${initialOpen==="morning"?"checked":""}> Sáng (6h - 12h)</label><label><input type="checkbox" name="time" value="afternoon" ${initialOpen==="afternoon"?"checked":""}> Chiều (12h - 18h)</label><label><input type="checkbox" name="time" value="evening" ${initialOpen==="evening"?"checked":""}> Tối (18h - 22h)</label><hr><h3>Đánh giá</h3>${[5,4.9,4.5].map(r=>`<label><input type="checkbox" name="rating" value="${r}" ${initialRating===String(r)?"checked":""}> ${"★".repeat(Math.floor(r))} <span>Từ ${r} sao</span></label>`).join("")}</aside>
      <div class="results-main"><div class="results-top"><h2 id="resultsCount"></h2><label>Sắp xếp theo <select id="sortSelect"><option value="featured">Đánh giá cao nhất</option><option value="rating">Theo điểm số</option><option value="reviews">Nhiều đánh giá nhất</option><option value="name">Tên A-Z</option></select></label></div><div id="shopResults" class="shop-list"></div></div>
    </div></section>
    <section class="section compact-top"><div class="container">${sectionHeading(`✦ Bài viết liên quan ${district ? `tại phường ${district}` : ""}`, "locations.html")}<div class="grid two">${[articles[0],articles[1]].map(card).join("")}</div></div></section>
    <div class="shop-modal" id="shopModal" aria-hidden="true">
      <div class="shop-modal-panel" role="dialog" aria-modal="true" aria-label="Chi tiết tiệm xỏ khuyên">
        <button class="icon-button shop-modal-close" id="shopModalClose" aria-label="Đóng chi tiết">${icon("close")}</button>
        <div id="shopModalContent"></div>
      </div>
    </div>`;
  updateShopResults(district, query);
}

function shopCard(shop, index) {
  const rating = shop.rating == null ? `<p class="rating muted-rating">Chưa có dữ liệu đánh giá</p>` : `<p class="rating">★ <b>${shop.rating.toFixed(1)}/5</b> <span>(${shop.reviews} đánh giá)</span></p>`;
  const social = shop.social ? `<p class="shop-social"><b>f</b><a href="${shop.facebook}" target="_blank" rel="noopener noreferrer">${shop.social}</a></p>` : "";
  const links = `<div class="shop-links"><a href="${shop.maps}" target="_blank" rel="noopener noreferrer">Bản đồ ↗</a>${shop.website ? `<a href="${shop.website}" target="_blank" rel="noopener noreferrer">Website ↗</a>` : ""}</div>`;
  return `<article class="shop-card" data-shop-index="${shops.indexOf(shop)}" role="button" tabindex="0" aria-label="Xem chi tiết ${shop.name}"><img src="${shop.image}" alt="${shop.name}"><span class="shop-rank">${index+1}</span><div class="shop-info"><h3>${shop.name}</h3>${rating}<p>${icon("pin")}${shop.address}</p><p>${icon("clock")}${shop.hours}</p><p>${icon("phone")}${shop.phone}</p>${social}${links}</div><p class="shop-desc">${shop.description}</p></article>`;
}

function shopModalContent(shop) {
  const rating = shop.rating == null ? `<p class="modal-rating muted-rating">Chưa có dữ liệu đánh giá</p>` : `<p class="modal-rating">★ <b>${shop.rating.toFixed(1)}/5</b> <span>(${shop.reviews} đánh giá)</span></p>`;
  const phoneHref = shop.phone.replace(/\s/g, "");
  return `<div class="shop-modal-grid">
    <div class="shop-modal-media"><img src="${shop.image}" alt="${shop.name}"><span>${shop.district}</span></div>
    <div class="shop-modal-copy"><p class="eyebrow">Thông tin địa điểm</p><h2>${shop.name}</h2>${rating}<p class="shop-modal-description">${shop.description}</p>
      <dl><div><dt>${icon("pin")}Địa chỉ</dt><dd>${shop.address}</dd></div><div><dt>${icon("clock")}Giờ mở cửa</dt><dd>${shop.hours}</dd></div><div><dt>${icon("phone")}Hotline</dt><dd><a href="tel:${phoneHref}">${shop.phone}</a></dd></div>${shop.social ? `<div><dt>f Facebook</dt><dd><a href="${shop.facebook}" target="_blank" rel="noopener noreferrer">${shop.social} ↗</a></dd></div>` : ""}</dl>
      <div class="shop-modal-actions"><a class="button" href="${shop.maps}" target="_blank" rel="noopener noreferrer">${icon("pin")}Mở Google Maps</a>${shop.website ? `<a class="outline-button" href="${shop.website}" target="_blank" rel="noopener noreferrer">Website ${icon("arrow")}</a>` : ""}</div>
    </div>
  </div>`;
}

function updateShopResults(district, query="") {
  const root = document.getElementById("shopResults");
  if (!root) return;
  let result = shops.filter(s => (!district || s.district === district) && (!query || `${s.name} ${s.address}`.toLowerCase().includes(query.toLowerCase())));
  const ratings = [...document.querySelectorAll('input[name="rating"]:checked')].map(i=>Number(i.value));
  if (ratings.length) result = result.filter(s=>s.rating >= Math.min(...ratings));
  const times = [...document.querySelectorAll('input[name="time"]:checked')].map(i=>i.value);
  if (times.length) result = result.filter(s=>{
    const numbers = s.hours.match(/\d{2}/g)?.map(Number) || [];
    const start = numbers[0] ?? 0, end = numbers[2] ?? 24;
    return times.some(t=>(t==="morning"&&start<12)||(t==="afternoon"&&end>=12&&start<18)||(t==="evening"&&end>=18));
  });
  const sort = document.getElementById("sortSelect")?.value || "featured";
  if (sort === "rating") result.sort((a,b)=>(b.rating ?? 0)-(a.rating ?? 0) || (b.reviews ?? 0)-(a.reviews ?? 0));
  if (sort === "reviews") result.sort((a,b)=>(b.reviews ?? 0)-(a.reviews ?? 0));
  if (sort === "name") result.sort((a,b)=>a.name.localeCompare(b.name,"vi"));
  document.getElementById("resultsCount").textContent = `${result.length} tiệm xỏ khuyên ${district ? `tại phường ${district}` : "tại Đà Nẵng"}`;
  root.innerHTML = result.length ? result.map(shopCard).join("") : `<div class="empty-state"><h3>Chưa tìm thấy địa điểm phù hợp</h3><p>Thử chọn phường khác hoặc bỏ từ khóa tìm kiếm.</p></div>`;
}

const mapRuntime = { map: null, markers: [], geocodeStarted: false };
const districtCenters = {"Hải Châu":[16.054,108.202],"Cẩm Lệ":[16.015,108.203],"Thanh Khê":[16.066,108.184],"An Khê":[16.056,108.170],"An Hải":[16.066,108.232],"Sơn Trà":[16.090,108.250],"Ngũ Hành Sơn":[16.000,108.255],"Hòa Khánh":[16.075,108.150],"Hòa Cường":[16.035,108.215]};

function shopMatchesMapFilters(shop) {
  const query = document.getElementById("mapSearch")?.value.trim().toLowerCase() || "";
  const district = document.getElementById("mapDistrict")?.value || "";
  const rating = Number(document.getElementById("mapRating")?.value || 0);
  const open = document.getElementById("mapOpen")?.value || "";
  const textMatch = !query || `${shop.name} ${shop.address}`.toLowerCase().includes(query);
  const districtMatch = !district || shop.district === district;
  const ratingMatch = !rating || (shop.rating != null && shop.rating >= rating);
  const numbers = shop.hours.match(/\d{2}/g)?.map(Number) || [];
  const start = numbers[0] ?? 0, end = numbers[2] ?? 24;
  const timeMatch = !open || (open === "morning" ? start < 12 : end >= 18);
  return textMatch && districtMatch && ratingMatch && timeMatch;
}

function updateOpenMapMarkers() {
  if (!mapRuntime.map || !mapRuntime.markers.length) return;
  const visible = mapRuntime.markers.filter(entry => {
    const show = shopMatchesMapFilters(entry.shop);
    if (show && !mapRuntime.map.hasLayer(entry.marker)) entry.marker.addTo(mapRuntime.map);
    if (!show && mapRuntime.map.hasLayer(entry.marker)) mapRuntime.map.removeLayer(entry.marker);
    return show;
  });
  const note = document.getElementById("mapNote");
  if (note) note.innerHTML = `⌖ <em>${visible.length} địa điểm phù hợp trên bản đồ</em>`;
  if (!visible.length) return;
  if (visible.length === 1) mapRuntime.map.setView(visible[0].marker.getLatLng(), 15);
  else mapRuntime.map.fitBounds(L.latLngBounds(visible.map(entry=>entry.marker.getLatLng())), { padding: [36,36], maxZoom: 15 });
}

function renderOpenMapFallback(message = "") {
  const mapRoot = document.getElementById("piercingMap");
  const state = document.getElementById("mapApiState");
  if (!mapRoot) return;
  mapRoot.innerHTML = `<img class="map-static-fallback" src="${ASSET}map-danang.jpg" alt="Bản đồ các khu vực tại Đà Nẵng">`;
  if (state) { state.hidden = !message; state.textContent = message; }
}

function approximateShopPosition(shop, index) {
  const center = districtCenters[shop.district] || [16.0544,108.2022];
  return [center[0] + ((index % 5)-2)*.0021, center[1] + ((index % 6)-2.5)*.0021];
}

function shopMapPopup(shop) {
  const rating = shop.rating == null ? "Chưa có đánh giá" : `★ ${shop.rating.toFixed(1)}/5 (${shop.reviews} đánh giá)`;
  return `<div class="map-info"><strong>${shop.name}</strong><span>${rating}</span><span>${shop.address}</span><a href="${shop.maps}" target="_blank" rel="noopener noreferrer">Mở Google Maps ↗</a></div>`;
}

async function refineOpenMapPositions() {
  if (mapRuntime.geocodeStarted) return;
  mapRuntime.geocodeStarted = true;
  let networkFailures = 0;
  for (const entry of mapRuntime.markers) {
    const cacheKey = `pd-osm:${entry.shop.address}`;
    let cached;
    try { cached = JSON.parse(localStorage.getItem(cacheKey)); } catch { cached = null; }
    if (Array.isArray(cached) && cached.length === 2) {
      entry.marker.setLatLng(cached);
      continue;
    }
    if (networkFailures >= 2) break;
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(), 8000);
    try {
      const query = encodeURIComponent(`${entry.shop.address}, Đà Nẵng, Việt Nam`);
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=vn&q=${query}`, { signal: controller.signal, headers: { "Accept-Language": "vi" } });
      if (!response.ok) throw new Error(`Geocoder ${response.status}`);
      const result = (await response.json())[0];
      if (result) {
        const position = [Number(result.lat), Number(result.lon)];
        entry.marker.setLatLng(position);
        localStorage.setItem(cacheKey, JSON.stringify(position));
      }
      networkFailures = 0;
      await new Promise(resolve=>setTimeout(resolve,1100));
    } catch { networkFailures++; }
    finally { clearTimeout(timeout); }
  }
  updateOpenMapMarkers();
}

function initPiercingOpenMap() {
  const mapRoot = document.getElementById("piercingMap");
  if (!mapRoot || !window.L) { renderOpenMapFallback("Không thể tải bản đồ trực tuyến. Hãy kiểm tra kết nối mạng."); return; }
  mapRoot.innerHTML = "";
  mapRuntime.map = L.map(mapRoot, { zoomControl: true, scrollWheelZoom: false }).setView([16.0544,108.2022], 12);
  const localBounds = L.latLngBounds([[15.95,108.04],[16.16,108.33]]);
  const localBase = L.imageOverlay(`${ASSET}map-danang.jpg`, localBounds, { opacity: 1, interactive: false }).addTo(mapRuntime.map);
  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(mapRuntime.map);
  let loadedTiles = 0;
  tiles.on("tileload", () => {
    loadedTiles++;
    if (loadedTiles >= 4) localBase.setOpacity(0);
  });
  tiles.on("tileerror", () => localBase.setOpacity(1));
  shops.forEach((shop,index)=>{
    const position = approximateShopPosition(shop,index);
    const marker = L.marker(position, { title: shop.name }).addTo(mapRuntime.map).bindPopup(shopMapPopup(shop), { maxWidth: 260 });
    mapRuntime.markers.push({ shop, marker });
  });
  setTimeout(()=>mapRuntime.map.invalidateSize(),0);
  updateOpenMapMarkers();
  refineOpenMapPositions();
}

function loadPiercingOpenMap() {
  if (!document.getElementById("piercingMap")) return;
  if (window.L) { initPiercingOpenMap(); return; }
  renderOpenMapFallback();
  if (!document.getElementById("leafletStyles")) {
    const stylesheet = document.createElement("link");
    stylesheet.id = "leafletStyles";
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(stylesheet);
  }
  const script = document.createElement("script");
  script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  script.async = true;
  script.onload = initPiercingOpenMap;
  script.onerror = () => renderOpenMapFallback("Không thể tải bản đồ trực tuyến. Hãy kiểm tra kết nối mạng.");
  document.head.appendChild(script);
}

function updateGoogleEmbed() {
  const frame = document.getElementById("googleMapEmbed");
  const openLink = document.getElementById("googleMapOpen");
  if (!frame) return;
  const search = document.getElementById("mapSearch")?.value.trim();
  const district = document.getElementById("mapDistrict")?.value;
  const english = i18n?.lang === "en";
  const query = [search || (english ? "piercing" : "xỏ khuyên"), district, english ? "Da Nang" : "Đà Nẵng"].filter(Boolean).join(" ");
  const encoded = encodeURIComponent(query);
  frame.src = `https://www.google.com/maps?q=${encoded}&z=${district || search ? 14 : 12}&output=embed&hl=${english ? "en" : "vi"}`;
  if (openLink) openLink.href = `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  const note = document.getElementById("mapNote");
  if (note) note.innerHTML = `⌖ <em>Google Maps: ${query}</em>`;
}

function renderArticle() {
  const slug = new URLSearchParams(location.search).get("slug") || articles[7].slug;
  const article = articles.find(a=>a.slug===slug) || articles[7];
  document.title = `${article.title} | Piercing Da Nang`;
  const sections = article.principles
    ? article.principles.map((title,i)=>`<section id="section-${i+1}" class="blog-section"><h2>${i+1}. ${title}</h2><p>${principleText(i)}</p></section>`).join("")
    : article.sections.map((s,i)=>`<section id="section-${i+1}" class="blog-section"><h2>${i+1}. ${s[0]}</h2><p>${s[1]}</p>${article.category === "Địa điểm" && i > 0 && i < 4 ? `<ul><li>Thông tin và đánh giá được tổng hợp để bạn tham khảo trước khi đặt lịch.</li><li>Nên liên hệ trực tiếp để xác nhận giờ mở cửa và loại trang sức phù hợp.</li></ul>` : ""}</section>`).join("");
  const relatedPool = ["Địa điểm", "Kinh nghiệm"].includes(article.category)
    ? [articles[1], articles[0], articles[6]]
    : [...articles.filter(a=>a.category===article.category), articles[0], articles[6], articles[2]];
  const related = [...new Map(relatedPool.filter(a=>a.slug!==article.slug).map(a=>[a.slug,a])).values()].slice(0,3);
  document.getElementById("app").innerHTML = `
    <article class="blog-page">
      <div class="container blog-breadcrumb">${breadcrumb([[article.category, categoryUrl(article.category)],[article.title,""]])}</div>
      <div class="container blog-layout">
        <div class="blog-main">
          <header class="blog-header"><h1>${article.title}</h1><time>${icon("calendar")} ${article.date}</time></header>
          <p class="blog-intro">${article.intro}</p>
          <img class="blog-hero-image" src="${ASSET}${article.image}" alt="${article.title}">
          <div class="blog-body">${sections}<p class="blog-closing">Hy vọng những gợi ý trên giúp bạn có thêm thông tin để đưa ra lựa chọn phù hợp. Đừng quên tìm hiểu kỹ và ưu tiên sự an toàn trong suốt quá trình xỏ cũng như chăm sóc lỗ xỏ.</p></div>
        </div>
        <aside class="related-sidebar"><h2>Bài viết liên quan</h2>${related.slice(0,2).map(sidebarCard).join("")}</aside>
      </div>
    </article>`;
}

function sidebarCard(article) {
  return `<article class="sidebar-card"><a class="sidebar-media" href="${articleUrl(article.slug)}"><img src="${ASSET}${article.image}" alt="${article.title}"><span>${article.category}</span></a><div><h3><a href="${articleUrl(article.slug)}">${article.title}</a></h3><p>${article.excerpt}</p><a class="text-link" href="${articleUrl(article.slug)}">Đọc thêm ${icon("arrow")}</a></div></article>`;
}

function principleText(i) {
  if (i18n?.lang === "en") return i18n.principleText[i];
  const text = [
    "Rửa tay sạch trước khi vệ sinh. Dùng nước muối sinh lý 0,9% hoặc dung dịch chuyên dùng, vệ sinh nhẹ nhàng và thấm khô.",
    "Tay tiếp xúc với nhiều vi khuẩn. Chỉ chạm vào trang sức khi thật sự cần thiết và luôn rửa tay trước.",
    "Giữ nguyên khuyên ban đầu trong thời gian hồi phục. Thay sớm có thể gây tổn thương và làm lỗ xỏ lâu lành.",
    "Tránh nằm nghiêng đè lên tai, chải tóc hoặc đội mũ bảo hiểm tạo áp lực trực tiếp lên vị trí mới xỏ.",
    "Sau khi vận động, tắm hoặc bơi, làm sạch nhẹ và giữ vùng xỏ khô thoáng để hạn chế kích ứng.",
    "Hạn chế sữa rửa mặt, dầu gội, keo tóc, nước hoa và mỹ phẩm chạm trực tiếp vào lỗ xỏ.",
    "Ưu tiên titanium chuẩn cấy ghép hoặc chất liệu rõ nguồn gốc. Kiểu dáng nên ít vướng và đúng kích thước.",
    "Sau khi tiếp xúc bụi bẩn hoặc ra nhiều mồ hôi, rửa sạch vùng xỏ bằng nước và thấm khô nhẹ nhàng.",
    "Theo dõi đỏ, sưng, nóng, đau hoặc dịch bất thường. Không tự ý chọc, xoay hay tháo khuyên khi có vấn đề.",
    "Ăn uống đủ chất, uống đủ nước, ngủ đủ và hạn chế chất kích thích để hỗ trợ cơ thể hồi phục.",
    "Thời gian lành khác nhau ở mỗi người và vị trí. Dù không còn đau, phần mô bên trong có thể vẫn chưa ổn định."
  ];
  return text[i];
}

function categoryUrl(category) {
  if (category.includes("Địa điểm") || category === "Kinh nghiệm") return "locations.html";
  if (category === "Xu hướng") return "trends.html";
  if (category === "Kiến thức") return "knowledge.html";
  return "care.html";
}

function bindInteractions() {
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => i18n?.setLanguage(button.dataset.language)));
  const menuButton = document.getElementById("menuToggle");
  const panel = document.getElementById("mobilePanel");
  menuButton?.addEventListener("click", ()=>{
    const open = panel.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.innerHTML = icon(open ? "close" : "menu");
  });

  const overlay = document.getElementById("searchOverlay");
  const setSearch = open => {
    overlay.classList.toggle("open", open);
    overlay.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("modal-open", open);
    if (open) setTimeout(()=>overlay.querySelector("input")?.focus(),100);
  };
  document.getElementById("searchOpen")?.addEventListener("click",()=>setSearch(true));
  document.getElementById("searchClose")?.addEventListener("click",()=>setSearch(false));
  overlay?.addEventListener("click",e=>{if(e.target===overlay)setSearch(false);});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")setSearch(false);});

  const careGrid = document.getElementById("careGrid");
  document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{
    document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    const list = [articles[8],articles[9],articles[10],articles[6],articles[11],articles[7]].filter(a=>filter==="all" || a.category===filter);
    careGrid.innerHTML = list.map(card).join("");
  }));

  document.getElementById("mapDistrict")?.addEventListener("change", updateGoogleEmbed);
  let mapSearchTimer;
  document.getElementById("mapSearch")?.addEventListener("input", () => {
    clearTimeout(mapSearchTimer);
    mapSearchTimer = setTimeout(updateGoogleEmbed, 450);
  });

  const districtSelect = document.getElementById("districtSelect");
  const query = new URLSearchParams(location.search).get("q") || "";
  districtSelect?.addEventListener("change",()=>{
    updateShopResults(districtSelect.value, query);
    const route = page === "locations" ? "locations.html" : "search.html";
    history.replaceState({},"",`${route}?district=${encodeURIComponent(districtSelect.value)}`);
    const relatedTitle = document.querySelector(".compact-top .section-heading h2");
    if (relatedTitle) relatedTitle.textContent = districtSelect.value ? `✦ Bài viết liên quan tại phường ${districtSelect.value}` : "✦ Bài viết liên quan tại Đà Nẵng";
  });
  document.getElementById("sortSelect")?.addEventListener("change",()=>updateShopResults(districtSelect.value, query));
  document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(input=>input.addEventListener("change",()=>updateShopResults(districtSelect.value, query)));

  const shopResults = document.getElementById("shopResults");
  const shopModal = document.getElementById("shopModal");
  const shopModalContentRoot = document.getElementById("shopModalContent");
  const shopModalClose = document.getElementById("shopModalClose");
  let lastShopTrigger = null;
  const openShopModal = card => {
    const shop = shops[Number(card.dataset.shopIndex)];
    if (!shop || !shopModal) return;
    lastShopTrigger = card;
    shopModalContentRoot.innerHTML = shopModalContent(shop);
    shopModal.classList.add("open");
    shopModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    shopModalClose.focus();
  };
  const closeShopModal = () => {
    if (!shopModal?.classList.contains("open")) return;
    shopModal.classList.remove("open");
    shopModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    lastShopTrigger?.focus();
  };
  shopResults?.addEventListener("click", event => {
    if (event.target.closest("a")) return;
    const card = event.target.closest(".shop-card");
    if (card) openShopModal(card);
  });
  shopResults?.addEventListener("keydown", event => {
    if (!event.target.matches(".shop-card") || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    openShopModal(event.target);
  });
  shopModalClose?.addEventListener("click", closeShopModal);
  shopModal?.addEventListener("click", event => { if (event.target === shopModal) closeShopModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeShopModal(); });

  document.querySelectorAll("[data-share]").forEach(button=>button.addEventListener("click", async ()=>{
    if (button.dataset.share === "copy") {
      try { await navigator.clipboard.writeText(location.href); button.textContent = "✓"; setTimeout(()=>button.textContent="↗",1200); } catch { /* Clipboard may be unavailable on file URLs. */ }
    } else {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`,"_blank","noopener,noreferrer");
    }
  }));
}

renderHeader();
renderFooter();
({home:renderHome,locations:renderLocations,trends:renderTrends,knowledge:renderKnowledge,care:renderCare,search:renderSearch,article:renderArticle}[page] || renderHome)();
i18n?.translateDOM(document);
i18n?.observe();
bindInteractions();
