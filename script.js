"use strict";

/* ============================================================
   DỮ LIỆU BỘ ĐỀ
   Phần I : 55 câu trắc nghiệm nhiều lựa chọn  (answer: chỉ số 0..3)
   Phần II: 15 câu Đúng/Sai, mỗi câu 4 ý a-b-c-d (answer: true/false)
   ============================================================ */

const PART1 = {
  id: 1,
  name: "Phần I — Trắc nghiệm nhiều lựa chọn",
  short: "Phần I",
  type: "mc",
  questions: [
    {
      q: " Trong môn Tin học, “dữ liệu” là thuật ngữ được sử dụng rất phổ biến. Phát biểu nào sau đây định nghĩa đúng nhất về “dữ liệu” theo góc độ của máy tính?",
      options: [
        "Là ý nghĩa thực sự của các con số và văn bản mang lại sự hiểu biết cho người dùng trong đời sống.",
        "Là kết quả cuối cùng mà máy tính trả về cho người dùng sau một quá trình tính toán phức tạp.",
        "Là thông tin (âm thanh, hình ảnh, văn bản,...) đã được đưa vào máy tính để máy tính có thể nhận biết và xử lí được.",
        "Là khả năng lưu trữ, phân tích và suy luận của hệ thống máy tính dựa trên các con số đầu vào."
      ],
      answer: 2
    },
    {
      q: " Dữ liệu và thông tin có mối quan hệ chặt chẽ nhưng độc lập tương đối. Phát biểu nào sau đây mô tả đúng nhất về tính toàn vẹn của thông tin?",
      options: [
        "Cùng một thông tin chỉ có duy nhất một cách thể hiện dữ liệu trong mọi trường hợp.",
        "Một dữ liệu bất kỳ đưa vào máy tính luôn mang duy nhất một thông tin không thay đổi.",
        "Thông tin luôn độc lập hoàn toàn với dữ liệu, không chịu ảnh hưởng bởi kích thước của tệp dữ liệu.",
        "Thông tin được hiểu đúng khi có đủ dữ liệu, nếu thiếu dữ liệu có thể làm thông tin sai lệch hoặc không xác định được."
      ],
      answer: 3
    },
    {
      q: " Trong sổ khám bệnh của một học sinh có ghi dòng chữ “39 °C”. Khi bác sĩ đọc cuốn sổ này, bác sĩ đã kết luận: “Học sinh này đang bị sốt cao”. Dựa vào sự phân biệt trong Tin học, nhận định nào sau đây là đúng?",
      options: [
        "“39 °C” là dữ liệu đầu vào, còn “Học sinh này đang bị sốt cao” là thông tin được rút ra.",
        "“39 °C” là thông tin đã được xử lí, còn “Học sinh này đang bị sốt cao” là dữ liệu thô.",
        "Cả “39 °C” và “Học sinh này đang bị sốt cao” đều chỉ là dữ liệu lưu trữ trong máy tính.",
        "Cả “39 °C” và “Học sinh này đang bị sốt cao” đều là kết quả cuối cùng không mang ý nghĩa."
      ],
      answer: 0
    },
    {
      q: " Học sinh A có một tệp tài liệu bài giảng định dạng PDF với dung lượng là 3 MB. Để tải lên một hệ thống học trực tuyến, hệ thống yêu cầu kiểm tra dung lượng theo đơn vị KB. Dung lượng của tệp tài liệu này tương đương với bao nhiêu KB?",
      options: ["3000 KB", "3072 KB", "3048 KB", "3000000 KB"],
      answer: 1
    },
    {
      q: " Quá trình xử lí thông tin của máy tính gồm ba bước cơ bản: Tiếp nhận dữ liệu, Xử lí dữ liệu và Đưa ra kết quả. Hoạt động nào dưới đây mô tả đúng nhất bước “Xử lí dữ liệu”?",
      options: [
        "Máy quét (scanner) quét một tài liệu giấy để tạo thành tệp hình ảnh lưu trong ổ cứng.",
        "Phần mềm chuyên dụng tổng hợp nhiệt độ nhiều năm để tìm ra khuynh hướng Trái Đất nóng lên.",
        "Máy tính hiển thị một biểu đồ báo cáo doanh thu lên màn hình máy chiếu cho mọi người xem.",
        "Micro ghi âm giọng nói của người dùng và lưu thành một tệp âm thanh MP3."
      ],
      answer: 1
    },
    {
      q: " Một người thợ nhiếp ảnh có một chiếc thẻ nhớ với dung lượng 16 GB. Máy ảnh được thiết lập để mỗi bức ảnh chụp ra có dung lượng trung bình khoảng 10 MB. Hỏi chiếc thẻ nhớ này có thể chứa tối đa khoảng bao nhiêu bức ảnh như vậy?",
      options: ["Khoảng 1600 bức ảnh", "Khoảng 1638 bức ảnh", "Khoảng 2048 bức ảnh", "Khoảng 16384 bức ảnh"],
      answer: 1
    },
    {
      q: " Thư viện trường có 2000 cuốn sách cổ cần được số hoá. Ước tính, sau khi số hóa bao gồm cả văn bản và hình ảnh, mỗi cuốn sách tốn khoảng 50 MB dung lượng. Thư viện dự định mua một thẻ nhớ dung lượng 128 GB để lưu trữ toàn bộ số sách này. Đánh giá nào sau đây là chính xác nhất về phương án này?",
      options: [
        "Thẻ nhớ không đủ sức chứa vì tổng dữ liệu cần lưu là 100 GB, lớn hơn sức chứa khả dụng của thẻ nhớ.",
        "Thẻ nhớ có thể chứa được vì tổng dữ liệu cần lưu khoảng gần 98 GB, nhỏ hơn dung lượng thực tế của thẻ nhớ 128 GB.",
        "Thẻ nhớ không thể chứa được vì 128 GB chỉ tương đương 12.800 MB, trong khi tổng dữ liệu cần lên tới 100.000 MB.",
        "Thẻ nhớ có thể chứa được vì 2000 cuốn sách khi số hoá chỉ tốn khoảng 10 GB dữ liệu, chiếm một phần rất nhỏ thẻ nhớ."
      ],
      answer: 1
    },
    {
      q: " Trong các thiết bị dưới đây, thiết bị nào được xếp vào nhóm thiết bị thông minh?",
      options: [
        "Đồng hồ cơ học",
        "Cân đĩa truyền thống",
        "Camera có kết nối Internet tự động phát hiện chuyển động",
        "Máy ảnh cơ sử dụng phim cuộn, không có kết nối mạng"
      ],
      answer: 2
    },
    {
      q: " Đặc điểm cốt lõi nào sau đây giúp một thiết bị điện tử được xem là “thiết bị thông minh”?",
      options: [
        "Thiết bị có giá thành sản xuất cao và thiết kế bề ngoài đẹp mắt.",
        "Thiết bị có màn hình cảm ứng lớn và sử dụng năng lượng mặt trời.",
        "Thiết bị tiêu thụ rất ít điện năng và có dung lượng pin lớn.",
        "Thiết bị có khả năng hoạt động tự chủ, kết nối và trao đổi dữ liệu qua mạng."
      ],
      answer: 3
    },
    {
      q: " Việc đưa robot vào hoạt động trong các nhà máy điện hạt nhân hoặc thám hiểm dưới đáy biển sâu minh họa cho đóng góp nào của Tin học?",
      options: ["Giao tiếp cộng đồng", "Quản lí nghiệp vụ tài chính", "Tự động hóa", "Thay đổi phương thức in ấn"],
      answer: 2
    },
    {
      q: " Đặc điểm nổi bật nào dưới đây mô tả đúng nhất về cuộc Cách mạng công nghiệp lần thứ tư (Cách mạng công nghiệp 4.0)?",
      options: [
        "Sự chuyển dịch từ lao động thủ công sang cơ giới hóa với động cơ hơi nước.",
        "Sử dụng dây chuyền sản xuất hàng loạt dựa vào năng lượng điện.",
        "Làm mờ ranh giới giữa thế giới thực (hệ thống vật lí) và không gian số (hệ thống ảo).",
        "Thay thế hoàn toàn giao tiếp qua mạng Internet bằng giao tiếp trực tiếp."
      ],
      answer: 2
    },
    {
      q: " Một trường THPT triển khai hệ thống điểm danh điện tử. Học sinh quẹt thẻ thông minh tại cổng, hệ thống tự động ghi nhận thời gian, cập nhật dữ liệu lên máy chủ của trường và gửi tin nhắn thông báo đến ứng dụng trên điện thoại của phụ huynh. Hệ thống này thể hiện rõ nhất vai trò của Tin học trong lĩnh vực nào?",
      options: [
        "Giải quyết các bài toán khoa học không gian.",
        "Quản lí điều hành và giao tiếp cộng đồng.",
        "Chế bản điện tử và thiết kế đồ họa.",
        "Nghiên cứu công nghệ sinh học và giải mã gen."
      ],
      answer: 1
    },
    {
      q: " Gia đình bạn Nam vừa mua một chiếc tủ lạnh mới. Tính năng nào sau đây chứng tỏ chiếc tủ lạnh này thực sự là một “thiết bị thông minh” chứ không phải thiết bị điện tử thông thường?",
      options: [
        "Tủ lạnh có kích thước lớn, lưu trữ được nhiều thực phẩm hơn tủ lạnh cũ.",
        "Tủ lạnh sử dụng rơ-le nhiệt cơ học để tự động ngắt máy nén khi đủ độ lạnh.",
        "Tủ lạnh có màn hình hiển thị nhiệt độ và hệ thống đèn LED siêu sáng bên trong.",
        "Tủ lạnh kết nối wifi, tự động nhận diện hạn sử dụng thực phẩm và gửi cảnh báo về điện thoại của Nam."
      ],
      answer: 3
    },
    {
      q: " Xe tự hành (ô tô không người lái) được xem là một thành tựu điển hình của Cách mạng công nghiệp 4.0. Mô tả nào sau đây thể hiện đầy đủ và chính xác nhất sự tích hợp thực - ảo trong quá trình vận hành của xe tự hành?",
      options: [
        "Xe sử dụng động cơ đốt trong truyền thống để di chuyển, sau đó người lái xe dùng điện thoại thông minh để tìm kiếm đường đi trên World Wide Web.",
        "Cảm biến trên xe thu thập dữ liệu môi trường thực tế, hệ thống AI tính toán tốc độ/hướng đi tối ưu trong không gian số, rồi gửi quyết định điều khiển xe trên đường thực.",
        "Người điều khiển sử dụng mạng xã hội để ra lệnh từ xa, hệ quản trị cơ sở dữ liệu in hóa đơn thu phí điện toán đám mây dựa trên quãng đường.",
        "Xe tự hành thu thập thông tin thời tiết qua Internet, sau đó phát các cảnh báo bằng âm thanh để người lái tự điều chỉnh vô lăng giảm tốc độ."
      ],
      answer: 1
    },
    {
      q: " Theo cách phân loại dữ liệu được giới thiệu trong bài học, bốn kiểu dữ liệu thường gặp trong máy tính là những kiểu nào sau đây?",
      options: [
        "Văn bản, số, hình ảnh, âm thanh",
        "Văn bản, số, logic, đa phương tiện",
        "Văn bản, logic, hình ảnh, âm thanh",
        "Số, logic, hình ảnh, âm thanh"
      ],
      answer: 1
    },
    {
      q: " Theo cách mã hóa UTF-8 được giới thiệu trong sách giáo khoa, một kí tự Unicode có thể được biểu diễn bằng bao nhiêu byte?",
      options: ["Từ 1 đến 2 byte", "Chính xác 2 byte", "Chính xác 4 byte", "Từ 1 đến 4 byte"],
      answer: 3
    },
    {
      q: " Trong danh sách học sinh, mã thẻ “0018” được sử dụng để nhận diện một học sinh và cần giữ nguyên hai chữ số 0 ở đầu. Mã thẻ này nên được biểu diễn bằng kiểu dữ liệu nào?",
      options: [
        "Văn bản, vì đây là chuỗi kí tự dùng để nhận diện học sinh.",
        "Số, vì mã thẻ chỉ chứa các chữ số từ 0 đến 9.",
        "Logic, vì mỗi mã thẻ chỉ tương ứng với một học sinh.",
        "Đa phương tiện, vì mã thẻ được lưu trong máy tính."
      ],
      answer: 0
    },
    {
      q: " Vì sao bảng mã Unicode phù hợp hơn bảng mã ASCII gốc khi biểu diễn văn bản tiếng Việt có dấu?",
      options: [
        "Unicode thay thế phần mềm soạn thảo khi nhập văn bản tiếng Việt.",
        "ASCII gốc có thể biểu diễn đầy đủ tiếng Việt nếu thay đổi phông chữ.",
        "Unicode luôn biểu diễn mỗi kí tự tiếng Việt bằng đúng một byte.",
        "Unicode cung cấp mã cho các kí tự tiếng Việt nằm ngoài phạm vi ASCII gốc."
      ],
      answer: 3
    },
    {
      q: " Một kí tự được gán mã số 200 trong bảng mã ASCII mở rộng. Vì sao không thể biểu diễn mã số này bằng 7 bit như trong bảng mã ASCII gốc?",
      options: [
        "Vì mã số 200 chỉ được sử dụng trong bảng mã Unicode.",
        "Vì mã số 200 phải được biểu diễn bằng ít nhất 16 bit.",
        "Vì 7 bit chỉ biểu diễn được 128 mã khác nhau, từ 0 đến 127.",
        "Vì 7 bit chỉ có thể biểu diễn chữ cái, không biểu diễn chữ số."
      ],
      answer: 2
    },
    {
      q: " Một nhóm học sinh xây dựng danh sách thành viên câu lạc bộ, trong đó có các họ tên như “Nguyễn Hà”, “Trần Đức”, “Đỗ Thị Ánh”. Nhóm cần lưu tệp văn bản và trao đổi với các máy tính khác mà vẫn giữ chính xác dấu tiếng Việt. Phương án nào sau đây phù hợp nhất?",
      options: [
        "Sử dụng bảng mã ASCII gốc vì mỗi kí tự chỉ cần 7 bit.",
        "Sử dụng bảng mã Unicode với cách mã hóa UTF-8 để lưu văn bản.",
        "Sử dụng một bảng mã ASCII mở rộng bất kì vì đều có đủ kí tự tiếng Việt.",
        "Sử dụng bảng mã ASCII gốc rồi thay đổi phông chữ để hiển thị dấu."
      ],
      answer: 1
    },
    {
      q: " Một trường học cần tạo tệp văn bản chứa cả mã lớp như “10A1”, “10A2” và họ tên học sinh có dấu như “Hà”, “Nguyễn”, “Đỗ”. Tệp sẽ được chuyển giữa nhiều máy tính. Nhóm thực hiện cần lựa chọn cách mã hóa vừa bảo toàn các kí tự tiếng Việt, vừa không bắt buộc mọi kí tự phải chiếm 4 byte. Giải pháp nào sau đây phù hợp nhất?",
      options: [
        "Sử dụng ASCII gốc cho toàn bộ tệp vì các kí tự đều được mã hóa bằng 7 bit.",
        "Sử dụng ASCII mở rộng vì mọi bảng mã 8 bit đều chứa đầy đủ kí tự tiếng Việt.",
        "Sử dụng Unicode và quy định mọi kí tự trong tệp đều phải chiếm đúng 4 byte.",
        "Sử dụng UTF-8 cho toàn bộ tệp vì các kí tự thuộc ASCII dùng 1 byte và vẫn hỗ trợ tiếng Việt có dấu."
      ],
      answer: 3
    },
    {
      q: " Hệ nhị phân sử dụng những chữ số nào để biểu diễn các số?",
      options: ["0 và 1", "0, 1 và 2", "Các chữ số từ 1 đến 9", "Các chữ số từ 0 đến 9"],
      answer: 0
    },
    {
      q: " Trong phép cộng hai số nhị phân, kết quả của phép tính 1 + 1 là",
      options: ["11₂", "10₂", "1₂", "100₂"],
      answer: 1
    },
    {
      q: " Số nhị phân 1101₂ có giá trị bằng bao nhiêu trong hệ thập phân?",
      options: ["11", "12", "13", "14"],
      answer: 2
    },
    {
      q: " Khi chuyển số thập phân 26 sang hệ nhị phân, kết quả nào sau đây là đúng?",
      options: ["11010₂", "11001₂", "11100₂", "10110₂"],
      answer: 0
    },
    {
      q: " Một chương trình cần cộng hai số nguyên dương được biểu diễn trong hệ nhị phân là 1011₂ và 1101₂. Kết quả phép cộng trong hệ nhị phân là",
      options: ["10110₂", "11000₂", "11010₂", "11100₂"],
      answer: 1
    },
    {
      q: " Một chương trình thực hiện phép nhân hai số nhị phân 110₂ và 101₂. Kết quả của phép nhân được biểu diễn trong hệ nhị phân là",
      options: ["11110₂", "11100₂", "10110₂", "11010₂"],
      answer: 0
    },
    {
      q: " Một hệ thống quản lí kho lưu số lượng sản phẩm của hai nhóm lần lượt là 1011₂ và 110₂. Mỗi sản phẩm cần 10₂ đơn vị dung lượng lưu trữ. Hệ thống tính tổng dung lượng cần thiết bằng cách cộng số lượng sản phẩm của hai nhóm, sau đó nhân với dung lượng của mỗi sản phẩm. Kết quả được lưu dưới dạng số nhị phân không dấu gồm 8 bit. Dãy bit nào sau đây là kết quả đúng?",
      options: ["00010001", "00100001", "00100010", "00100100"],
      answer: 2
    },
    {
      q: " Trong máy tính, hai giá trị logic Đúng (True) và Sai (False) thường được biểu diễn lần lượt bằng những bit nào?",
      options: ["0 và 1", "1 và 0", "1 và 1", "0 và 0"],
      answer: 1
    },
    {
      q: " Phép toán logic XOR giữa hai mệnh đề p và q cho kết quả Đúng khi nào?",
      options: [
        "Khi cả p và q đều mang giá trị Đúng.",
        "Khi cả p và q đều mang giá trị Sai.",
        "Khi có ít nhất một mệnh đề Đúng, kể cả khi cả hai cùng Đúng.",
        "Khi p và q mang hai giá trị logic khác nhau."
      ],
      answer: 3
    },
    {
      q: " Cho hai biến logic p = 1 và q = 0. Cặp giá trị của hai biểu thức NOT p và p AND q lần lượt là",
      options: ["(0, 0)", "(0, 1)", "(1, 0)", "(1, 1)"],
      answer: 0
    },
    {
      q: " Cho hai biến logic p = 1 và q = 1. Cặp giá trị của hai biểu thức p OR q và p XOR q lần lượt là",
      options: ["(0, 0)", "(1, 0)", "(0, 1)", "(1, 1)"],
      answer: 1
    },
    {
      q: " Cho ba biến logic p = 0, q = 1 và r = 1. Cặp giá trị của hai biểu thức p AND (q OR r) và (p AND q) OR r lần lượt là",
      options: ["(0, 0)", "(1, 0)", "(0, 1)", "(1, 1)"],
      answer: 2
    },
    {
      q: " Một mạch điện gồm hai công tắc K1 và K2 mắc nối tiếp để điều khiển một bóng đèn. Quy ước công tắc đóng có giá trị logic 1, công tắc mở có giá trị logic 0. Gọi p và q lần lượt là giá trị logic của K1 và K2. Biết K1 đang đóng, K2 đang mở. Phương án nào sau đây biểu diễn đúng điều kiện đèn sáng và xác định đúng trạng thái hiện tại của bóng đèn?",
      options: ["p OR q; đèn sáng", "p XOR q; đèn sáng", "p AND q; đèn sáng", "p AND q; đèn tắt"],
      answer: 3
    },
    {
      q: " Một hệ thống chiếu sáng tự động sử dụng hai cảm biến K1, K2 và một công tắc khóa an toàn K3. Hệ thống được thiết kế theo các yêu cầu: Đèn chỉ được bật khi đúng một trong hai cảm biến K1 hoặc K2 được kích hoạt. Nếu công tắc khóa an toàn K3 được bật thì đèn phải tắt, bất kể trạng thái của hai cảm biến. Quy ước p, q lần lượt là giá trị logic của hai cảm biến K1, K2; r là giá trị logic của công tắc khóa an toàn K3 (1 là đang bật khóa, 0 là không bật khóa). Tại một thời điểm, p = 1, q = 0 và r = 0. Phương án nào sau đây biểu diễn đúng điều kiện đèn sáng và xác định đúng trạng thái của đèn tại thời điểm đó?",
      options: [
        "(p OR q) AND (NOT r); đèn sáng",
        "(p XOR q) AND (NOT r); đèn sáng",
        "(p XOR q) OR (NOT r); đèn sáng",
        "(p XOR q) AND r; đèn tắt"
      ],
      answer: 1
    },
    {
      q: " Trong quá trình số hóa âm thanh theo phương pháp PCM, thao tác lấy mẫu được thực hiện nhằm mục đích gì?",
      options: [
        "Ghi lại giá trị biên độ tín hiệu âm thanh tại các thời điểm xác định.",
        "Loại bỏ toàn bộ các thành phần nhiễu có trong tín hiệu âm thanh.",
        "Chuyển đổi trực tiếp tín hiệu âm thanh thành tệp có định dạng MP3.",
        "Điều chỉnh giá trị biên độ của tín hiệu âm thanh thành một mức cố định."
      ],
      answer: 0
    },
    {
      q: " Trong hệ màu RGB, màu của một điểm ảnh được tạo thành từ ba thành phần màu cơ bản nào?",
      options: [
        "Đỏ, vàng, xanh dương",
        "Đỏ, xanh lục, vàng",
        "Đỏ, xanh lục, xanh dương",
        "Xanh lơ, hồng sẫm, vàng"
      ],
      answer: 2
    },
    {
      q: " Một đoạn âm thanh được số hóa theo phương pháp PCM. Nếu tăng số mẫu lấy trong mỗi giây lên gấp đôi, trong khi thời lượng và số bit biểu diễn mỗi mẫu không thay đổi, dung lượng dữ liệu âm thanh chưa nén sẽ thay đổi như thế nào?",
      options: ["Giảm một nửa", "Không thay đổi", "Tăng gấp bốn lần", "Tăng gấp đôi"],
      answer: 1
    },
    {
      q: " Nhận định nào sau đây đúng khi so sánh hai định dạng ảnh JPEG và PNG?",
      options: [
        "JPEG và PNG đều sử dụng phương pháp nén có mất mát.",
        "JPEG nén không mất mát, còn PNG nén có mất mát.",
        "JPEG thường nén có mất mát, còn PNG nén không mất mát.",
        "JPEG và PNG đều không sử dụng phương pháp nén dữ liệu."
      ],
      answer: 2
    },
    {
      q: " Một học sinh cần đăng tải bản ghi âm bài thuyết trình lên trang web của lớp. Yêu cầu là tệp âm thanh có dung lượng nhỏ để thuận tiện tải xuống, đồng thời chấp nhận chất lượng âm thanh giảm không đáng kể. Phương án nào sau đây phù hợp nhất?",
      options: [
        "Lưu dưới dạng WAV với dữ liệu PCM không nén để giảm dung lượng.",
        "Lưu dưới dạng MP3 với phương pháp nén có mất mát để giảm dung lượng.",
        "Lưu dưới dạng WAV và tăng số bit biểu diễn mỗi mẫu để giảm dung lượng.",
        "Lưu dưới dạng MP3 không sử dụng nén để giữ nguyên dung lượng ban đầu."
      ],
      answer: 1
    },
    {
      q: " Một nhóm học sinh thiết kế biểu tượng cho trang web của trường. Biểu tượng có nhiều màu sắc, cần hiển thị trên các nền có màu khác nhau mà không xuất hiện nền hình chữ nhật bao quanh. Nhóm cũng muốn tránh mất chất lượng hình ảnh do quá trình nén. Định dạng tệp nào sau đây phù hợp nhất?",
      options: [
        "JPEG, vì hỗ trợ nền trong suốt và nén không mất mát.",
        "BMP, vì luôn có dung lượng nhỏ hơn các định dạng ảnh khác.",
        "JPEG, vì bảo toàn hoàn toàn chất lượng khi nén ảnh.",
        "PNG, vì hỗ trợ nền trong suốt và nén không mất mát."
      ],
      answer: 3
    },
    {
      q: " Một nhóm học sinh xây dựng kho học liệu số với hai yêu cầu: Âm thanh: Một đoạn ghi âm dài 10 giây được số hóa bằng PCM với tốc độ 8 000 mẫu/giây, mỗi mẫu biểu diễn bằng 8 bit. Nhóm muốn tăng số mẫu lấy trong mỗi giây lên 16 000 mẫu/giây, giữ nguyên thời lượng và số bit cho mỗi mẫu. Hình ảnh: Một biểu tượng của trường cần có nền trong suốt và không bị mất chất lượng do quá trình nén ảnh. Nhận định nào sau đây đúng về sự thay đổi dung lượng dữ liệu âm thanh chưa nén và định dạng ảnh cần lựa chọn?",
      options: [
        "Dung lượng âm thanh giảm một nửa; biểu tượng nên lưu dưới dạng PNG.",
        "Dung lượng âm thanh tăng gấp đôi; biểu tượng nên lưu dưới dạng JPEG.",
        "Dung lượng âm thanh tăng gấp đôi; biểu tượng nên lưu dưới dạng PNG.",
        "Dung lượng âm thanh tăng gấp bốn lần; biểu tượng nên lưu dưới dạng JPEG."
      ],
      answer: 2
    },
    {
      q: " Trên màn hình chính của điện thoại thông minh, khu vực nào thường hiển thị thời gian, trạng thái kết nối mạng và mức pin còn lại?",
      options: ["Thanh điều hướng", "Thanh trạng thái", "Thanh truy cập nhanh", "Danh sách ứng dụng"],
      answer: 1
    },
    {
      q: " Để xem, sao chép, di chuyển hoặc xóa các tệp được lưu trong bộ nhớ điện thoại, người dùng cần sử dụng loại ứng dụng nào sau đây?",
      options: ["Ứng dụng chụp ảnh", "Ứng dụng duyệt web", "Ứng dụng quản lí tệp", "Ứng dụng nhắn tin"],
      answer: 2
    },
    {
      q: " Một học sinh đang sử dụng điện thoại Android và đã mở nhiều ứng dụng. Học sinh muốn hiển thị danh sách các ứng dụng đang chạy để chuyển sang ứng dụng đã mở trước đó. Theo giao diện điều hướng ba nút được giới thiệu trong sách giáo khoa, học sinh cần chọn nút nào?",
      options: ["Nút Home", "Nút Quay lại (Back)", "Nút Tổng quan (Overview)", "Nút khóa màn hình"],
      answer: 2
    },
    {
      q: " Một học sinh sử dụng ứng dụng quản lí tệp để sao chép tệp BaiTap.docx từ thư mục Download sang thư mục HocTap. Sau khi thao tác sao chép thành công, kết quả nào sau đây là đúng?",
      options: [
        "Tệp được giữ trong Download và có thêm bản sao trong HocTap.",
        "Tệp bị xóa khỏi Download và chỉ còn xuất hiện trong HocTap.",
        "Tệp được đổi tên trong Download nhưng không xuất hiện trong HocTap.",
        "Tệp bị xóa khỏi cả hai thư mục sau khi hoàn thành việc sao chép."
      ],
      answer: 0
    },
    {
      q: " Một học sinh đã tải một số ảnh học tập từ điện thoại lên Google Drive. So với việc chỉ lưu ảnh trong bộ nhớ trong của điện thoại, lợi ích nào sau đây phù hợp với việc sử dụng dịch vụ lưu trữ đám mây?",
      options: [
        "Các ảnh sẽ được lưu trực tiếp vào bộ nhớ trong của mọi thiết bị.",
        "Các ảnh có thể được truy cập từ thiết bị khác thông qua tài khoản phù hợp khi có kết nối mạng.",
        "Các ảnh sẽ tự động xuất hiện trong mọi ứng dụng trên thiết bị khác.",
        "Các ảnh sẽ được chuyển hoàn toàn khỏi điện thoại sau khi tải lên đám mây."
      ],
      answer: 1
    },
    {
      q: " Một học sinh đã chụp nhiều ảnh bằng điện thoại Android. Học sinh cần sao chép các ảnh này sang máy tính để làm bài thuyết trình nhưng vẫn muốn giữ ảnh gốc trên điện thoại. Giả sử các ảnh được lưu tại Bộ nhớ trong/DCIM/Camera và điện thoại đã được kết nối với máy tính ở chế độ truyền tệp. Cách thực hiện nào sau đây phù hợp nhất?",
      options: [
        "Mở thư mục Download trên điện thoại, di chuyển toàn bộ tệp sang máy tính.",
        "Mở thư mục DCIM/Camera trên điện thoại, xóa ảnh sau khi xem trên máy tính.",
        "Mở thư mục DCIM/Camera trên điện thoại, di chuyển các ảnh sang máy tính.",
        "Mở thư mục DCIM/Camera trên điện thoại, chọn và sao chép các ảnh cần thiết sang máy tính."
      ],
      answer: 3
    },
    {
      q: " Một nhóm học sinh thực hiện dự án “Trường học xanh”. Nhóm sử dụng điện thoại để chụp ảnh hoạt động, sau đó cần tiếp tục xử lí ảnh trên máy tính và chia sẻ với các thành viên trong nhóm. Nhóm đặt ra các yêu cầu: Ảnh dự án phải được tổ chức trong thư mục riêng để dễ tìm kiếm. Ảnh gốc trên điện thoại cần được giữ lại. Các thành viên được phép phải có thể truy cập ảnh dự án từ thiết bị khác. Không chia sẻ nhầm ảnh cá nhân hoặc các tệp không liên quan. Phương án nào sau đây đáp ứng đầy đủ các yêu cầu trên?",
      options: [
        "Di chuyển toàn bộ thư mục DCIM lên Google Drive, sau đó công khai liên kết để các thành viên truy cập.",
        "Tạo thư mục riêng cho dự án, sao chép các ảnh cần thiết vào đó, tải lên Google Drive và chia sẻ đúng thư mục dự án cho các thành viên được phép.",
        "Tạo nhiều bản sao của ảnh trong các thư mục khác nhau trên điện thoại, sau đó gửi tên các tệp cho thành viên.",
        "Tải toàn bộ ảnh trên điện thoại lên Google Drive, sau đó yêu cầu các thành viên tự tìm và lựa chọn ảnh dự án."
      ],
      answer: 1
    },
    {
      q: " Mạng máy tính cục bộ (LAN) có đặc điểm nào sau đây?",
      options: [
        "Kết nối các máy tính trên phạm vi toàn cầu.",
        "Kết nối các thiết bị trong phạm vi địa lí nhỏ.",
        "Kết nối các thiết bị thông qua Internet trên toàn thế giới.",
        "Kết nối các mạng máy tính thuộc nhiều quốc gia khác nhau."
      ],
      answer: 1
    },
    {
      q: " Internet vạn vật (IoT) được hiểu là gì?",
      options: [
        "Hệ thống kết nối các máy tính cá nhân để chia sẻ dữ liệu trong mạng LAN.",
        "Hệ thống cung cấp các phần mềm ứng dụng trực tuyến qua Internet.",
        "Hệ thống kết nối các thiết bị thông minh để thu thập, trao đổi dữ liệu và thực hiện các hoạt động tự động.",
        "Hệ thống lưu trữ dữ liệu trên các máy chủ từ xa để người dùng truy cập qua Internet."
      ],
      answer: 2
    },
    {
      q: " Một công ty phát triển phần mềm thuê một hệ thống nền tảng trực tuyến, trong đó có sẵn các công cụ hỗ trợ xây dựng và triển khai ứng dụng. Vì sao dịch vụ này được xếp vào loại PaaS?",
      options: [
        "Vì công ty thuê nền tảng phục vụ việc phát triển và triển khai ứng dụng.",
        "Vì công ty thuê phần mềm hoàn chỉnh để sử dụng trực tiếp.",
        "Vì công ty thuê các thiết bị mạng để xây dựng mạng LAN riêng.",
        "Vì công ty thuê máy chủ và tự quản lí toàn bộ phần mềm trên đó."
      ],
      answer: 0
    },
    {
      q: " Một trường học có mạng LAN kết nối các máy tính trong phòng Tin học. Khi đường truyền Internet bị gián đoạn, các máy tính vẫn có thể truy cập thư mục dùng chung trên một máy tính nội bộ đang hoạt động bình thường. Nguyên nhân nào sau đây giải thích đúng hiện tượng này?",
      options: [
        "Vì mạng LAN tự động chuyển thành mạng Internet khi mất kết nối.",
        "Vì các thiết bị trong mạng LAN có thể trao đổi dữ liệu nội bộ mà không cần Internet.",
        "Vì dữ liệu trong thư mục dùng chung được tự động chuyển lên đám mây.",
        "Vì mọi máy tính trong mạng LAN đều có đường truyền Internet riêng biệt."
      ],
      answer: 1
    },
    {
      q: " Một trang trại muốn xây dựng hệ thống tưới cây thông minh. Hệ thống cần thu thập dữ liệu độ ẩm đất, tự động bật máy bơm khi đất quá khô và cho phép người quản lí theo dõi trạng thái từ xa qua Internet. Phương án nào sau đây phù hợp nhất với mô hình IoT?",
      options: [
        "Sử dụng máy bơm có công tắc cơ học và ghi chép độ ẩm đất bằng sổ tay.",
        "Kết nối cảm biến độ ẩm với bộ điều khiển, truyền dữ liệu qua Internet và điều khiển máy bơm tự động.",
        "Sử dụng máy bơm có bộ hẹn giờ cố định và không kết nối với các thiết bị khác.",
        "Sử dụng cảm biến độ ẩm có màn hình hiển thị tại chỗ, người quản lí tự bật máy bơm."
      ],
      answer: 1
    },
    {
      q: " Một trường THPT đang xây dựng mô hình trường học số với ba yêu cầu: Yêu cầu 1: Các máy tính trong phòng Tin học có thể chia sẻ máy in và tệp dữ liệu nội bộ ngay cả khi mất kết nối Internet. Yêu cầu 2: Giáo viên có thể cùng soạn thảo tài liệu trực tuyến từ nhiều địa điểm khác nhau mà không phải tự quản trị máy chủ ứng dụng. Yêu cầu 3: Hệ thống vườn thông minh sử dụng cảm biến để thu thập dữ liệu môi trường, tự động điều khiển thiết bị và cho phép theo dõi từ xa qua Internet. Phương án nào sau đây đáp ứng đầy đủ cả ba yêu cầu?",
      options: [
        "Xây dựng mạng LAN nội bộ; sử dụng dịch vụ SaaS; triển khai hệ thống IoT kết nối Internet.",
        "Sử dụng Internet thay cho mạng LAN nội bộ; thuê dịch vụ PaaS; lắp đặt hệ thống tưới thủ công.",
        "Xây dựng mạng LAN nội bộ; thuê dịch vụ IaaS; sử dụng cảm biến chỉ hiển thị dữ liệu tại chỗ.",
        "Sử dụng Internet thay cho mạng LAN nội bộ; sử dụng dịch vụ SaaS; lắp đặt thiết bị hẹn giờ không trao đổi dữ liệu."
      ],
      answer: 0
    }
  ]
};

const PART2 = {
  id: 2,
  name: "Phần II — Câu hỏi Đúng/Sai",
  short: "Phần II",
  type: "tf",
  questions: [
    {
      q: "Lan nhập vào máy tính điểm kiểm tra của năm bạn, lần lượt là 6; 8; 7; 9; 5. Phần mềm tính điểm trung bình và đếm số bạn đạt từ 7 điểm trở lên, sau đó hiển thị kết quả để Lan nhận xét tình hình học tập của nhóm.",
      st: [
        { t: "Các điểm số được Lan nhập vào máy tính là dữ liệu đầu vào.", a: true },
        { t: "Việc phần mềm tính điểm trung bình thuộc bước đưa ra kết quả, vì phép tính tạo ra một giá trị mới.", a: false },
        { t: "Từ cùng danh sách điểm, việc tính điểm trung bình và đếm số bạn đạt từ 7 điểm trở lên cung cấp những thông tin khác nhau về kết quả học tập của nhóm.", a: true },
        { t: "Nếu nhóm đặt mục tiêu có ít nhất 70% số bạn đạt từ 7 điểm trở lên thì kết quả hiện tại đã đáp ứng mục tiêu đó.", a: false }
      ]
    },
    {
      q: "Nhóm của Hương cần sao chép 600 tệp ảnh, mỗi tệp có dung lượng 5 MB, vào một USB. USB thứ nhất còn trống 2 GB, USB thứ hai còn trống 4 GB; nhóm cần chọn một USB chứa đủ toàn bộ ảnh mà không xoá dữ liệu đang có. Sử dụng quy ước 1 GB = 1 024 MB và bỏ qua dung lượng phụ phát sinh khi lưu tệp.",
      st: [
        { t: "GB và MB dùng trong thông số của các USB là những đơn vị đo dung lượng lưu trữ dữ liệu.", a: true },
        { t: "Vì hai USB đều là thiết bị lưu trữ số nên khả năng chứa thêm ảnh của chúng như nhau, dù dung lượng còn trống khác nhau.", a: false },
        { t: "Khi xác định một USB có chứa đủ bộ ảnh hay không, cần so sánh tổng dung lượng bộ ảnh với dung lượng còn trống của USB.", a: true },
        { t: "Nếu chọn USB còn trống 4 GB, sau khi sao chép đủ 600 ảnh, nhóm còn 1 096 MB dung lượng trống.", a: true }
      ]
    },
    {
      q: "Gia đình Hùng vừa lắp đặt một hệ thống camera an ninh và bóng đèn thông minh có khả năng tự động bật/tắt khi có người. Các thiết bị này kết nối với nhau qua mạng wifi và Hùng có thể theo dõi, điều khiển chúng thông qua điện thoại thông minh.",
      st: [
        { t: "Điện thoại thông minh của Hùng và camera kết nối mạng Internet để truyền dữ liệu tự động đều là các thiết bị thông minh.", a: true },
        { t: "Bóng đèn trong nhà Hùng được xem là “thông minh” đơn thuần vì nó sử dụng năng lượng điện để hoạt động thay cho các loại đèn truyền thống.", a: false },
        { t: "Hệ thống các thiết bị trong nhà Hùng kết nối với nhau nhằm thu thập và xử lí thông tin một cách tự động là một ví dụ về vạn vật kết nối (IoT).", a: true },
        { t: "Dựa vào tính năng hoạt động tự chủ và kết nối dữ liệu, Hùng có thể thiết lập hệ thống tự động gửi tin nhắn cảnh báo đến điện thoại nếu camera phát hiện chuyển động lạ.", a: true }
      ]
    },
    {
      q: "Tập đoàn công nghệ X đang thử nghiệm một chiếc xe ô tô tự hành trên giao thông thực tế. Chiếc xe được trang bị nhiều cảm biến thông minh nhằm tự động thu thập dữ liệu về người đi bộ và biển báo để máy tính trên xe tính toán tốc độ và hướng đi an toàn.",
      st: [
        { t: "Xe tự hành có thể sử dụng trí tuệ nhân tạo (AI) để nhận diện chướng ngại vật, dự đoán nguy cơ va chạm và hỗ trợ quyết định giảm tốc độ.", a: true },
        { t: "Quá trình xe tự hành tính toán tốc độ, hướng đi tối ưu được tính toán trên không gian số (thế giới ảo) và gửi quyết định để xe thực hiện trong thế giới thực.", a: true },
        { t: "Trong cuộc Cách mạng công nghiệp 4.0, xe ô tô tự hành hoạt động hoàn toàn bằng thiết bị cơ khí thủ công mà không cần sự can thiệp của dữ liệu số hay hệ thống IoT.", a: false },
        { t: "Nếu có dịch vụ xe tự hành cho phép đặt xe trực tuyến, người dân có thể đặt xe qua Internet mà không cần sở hữu ô tô riêng.", a: true }
      ]
    },
    {
      q: "Khi thực hành tìm hiểu về cách máy tính lưu trữ kí tự, nhóm của Bình đang dùng công cụ chuyển đổi để xem mã nhị phân của các từ tiếng Anh theo bảng mã ASCII. Các bạn nhận thấy mỗi kí tự được máy tính lưu trữ dưới dạng một dãy bit nhất định.",
      st: [
        { t: "Bảng mã ASCII mở rộng sử dụng 8 bit để biểu diễn một kí tự, cho phép mã hoá tối đa 256 kí tự khác nhau.", a: true },
        { t: "Bảng mã ASCII 7 bit (bảng mã chuẩn) có đủ mã để biểu diễn đầy đủ các chữ cái tiếng Việt có dấu.", a: false },
        { t: "Từ mã nhị phân của một kí tự trong bảng mã ASCII, ta có thể quy đổi lại thành một số thập phân duy nhất tương ứng với số thứ tự của kí tự đó trong bảng mã.", a: true },
        { t: "Khi Bình gõ từ “CAB” trên bàn phím, máy tính sẽ cần sử dụng đúng 24 bit để lưu trữ chuỗi kí tự này vào bộ nhớ theo bảng mã ASCII mở rộng.", a: true }
      ]
    },
    {
      q: "Cô giáo giao nhiệm vụ tạo một trang web giới thiệu về trường học có chứa đồng thời tiếng Việt, tiếng Anh và tiếng Nhật. Nhóm của Lan quyết định sử dụng bảng mã Unicode (với định dạng UTF-8) khi thiết kế trang web này thay vì sử dụng các bảng mã cục bộ.",
      st: [
        { t: "Unicode quy định mã cho các kí tự thuộc nhiều hệ chữ viết; với cách mã hóa UTF-8, một kí tự có thể được biểu diễn bằng từ 1 đến 4 byte.", a: true },
        { t: "Nhóm của Lan sử dụng bảng mã Unicode nhằm tránh tình trạng thiếu vị trí kí tự và giải quyết nhu cầu dùng nhiều ngôn ngữ đồng thời trong cùng một ứng dụng.", a: false },
        { t: "Trong định dạng UTF-8, tất cả các kí tự tiếng Việt có dấu hay chữ tượng hình tiếng Nhật đều được mã hoá với độ dài cố định là 2 byte giống hệt nhau.", a: true },
        { t: "Nếu Lan gõ dòng chữ tiếng Anh “School”, hệ thống UTF-8 sẽ mã hoá mỗi kí tự trong từ này bằng 1 byte, hoàn toàn tương thích với bảng mã ASCII gốc.", a: true }
      ]
    },
    {
      q: "Hùng đang tìm hiểu cách máy tính lưu trữ điểm số của mình. Điểm môn Toán của Hùng là 9 (hệ thập phân). Hùng biết rằng máy tính không lưu số 9 trực tiếp mà phải chuyển đổi sang một hệ đếm khác phù hợp với cấu tạo của linh kiện điện tử.",
      st: [
        { t: "Máy tính sử dụng hệ nhị phân chỉ gồm hai chữ số 0 và 1 để lưu trữ dữ liệu, bao gồm cả điểm số của Hùng.", a: true },
        { t: "Giả sử các vị trí bit được đánh số từ phải sang trái bắt đầu bằng 1; một bit có giá trị 1 ở vị trí thứ k đóng góp giá trị 2ᵏ vào số nhị phân.", a: false },
        { t: "Hệ nhị phân phù hợp với máy tính vì các linh kiện điện tử cấu tạo nên máy tính có thể dễ dàng biểu diễn hai trạng thái vật lý (ví dụ: có điện/không có điện) tương ứng với 1 và 0.", a: true },
        { t: "Điểm Toán của Hùng (số 9 trong hệ thập phân) có biểu diễn nhị phân là 1001.", a: true }
      ]
    },
    {
      q: "An đang nghiên cứu cách máy tính phân biệt số dương và số âm. Khi viết một chương trình đo nhiệt độ, An cần lưu trữ giá trị −15°C. An phát hiện ra rằng, với cùng một chuỗi bit, tùy vào phương pháp mã hóa mà máy tính sẽ hiểu đó là số dương hay số âm.",
      st: [
        { t: "Khi biểu diễn số nguyên có dấu, người ta luôn dành ra bit tận cùng bên phải để làm bit dấu.", a: false },
        { t: "Trong cách mã hóa dấu – lượng (mã dấu – lượng), mã bù 1 và mã bù 2, số dương đều có bit dấu là 0 và biểu diễn nhị phân phần giá trị giống hệt nhau.", a: true },
        { t: "Biểu diễn số nguyên âm trong ba cách mã hóa (mã thuận, mã bù 1, mã bù 2) là hoàn toàn giống nhau, chỉ khác nhau ở số lượng bit được sử dụng.", a: false },
        { t: "Giả sử sử dụng 8 bit, cách biểu diễn dấu – lượng của nhiệt độ −15 mà chương trình của An lưu trữ sẽ là 10001111₂.", a: true }
      ]
    },
    {
      q: "Để được tham gia câu lạc bộ Tin học của trường, học sinh cần thoả mãn đồng thời hai điều kiện: “Là học sinh lớp 10” và “Có điểm trung bình môn Toán từ 8.0 trở lên”. Bạn Lâm hiện đang học lớp 10 và có điểm trung bình môn Toán là 7.5.",
      st: [
        { t: "Khẳng định “Lâm là học sinh lớp 10” là một mệnh đề và có giá trị chân lí là Đúng (tương ứng với giá trị 1).", a: true },
        { t: "Điều kiện để tham gia câu lạc bộ Tin học được mô tả bằng kết quả của phép toán lôgic OR giữa hai mệnh đề thành phần.", a: false },
        { t: "Trong máy tính, chỉ cần sử dụng 1 bit dữ liệu là đủ để biểu diễn trạng thái của mệnh đề “Lâm có điểm trung bình môn Toán từ 8.0 trở lên”.", a: true },
        { t: "Gọi p là mệnh đề “Là học sinh lớp 10”, q là mệnh đề “Có điểm trung bình môn Toán từ 8.0 trở lên”. Biểu thức lôgic mô tả việc Lâm không đủ điều kiện tham gia câu lạc bộ là NOT (p AND q) và biểu thức này nhận giá trị bằng 1.", a: true }
      ]
    },
    {
      q: "Một bóng đèn ngoài hiên nhà tự động được thiết kế để sáng dựa trên hai công tắc: công tắc K1 (đóng khi trời tối) và công tắc K2 (đóng khi có người đến gần). Hệ thống yêu cầu bóng đèn chỉ sáng khi trời tối và đồng thời phát hiện có người.",
      st: [
        { t: "Trạng thái của công tắc (đóng/mở) và trạng thái của bóng đèn (sáng/tắt) là những thông tin có tính đối lập, có thể được biểu diễn bằng dữ liệu lôgic.", a: true },
        { t: "Trong mô hình mạch điện dùng hai công tắc cơ học mắc nối tiếp để đóng/ngắt trực tiếp, đèn chỉ sáng khi cả K1 và K2 đều đóng.", a: true },
        { t: "Nếu trời tối (công tắc K1 đóng, giá trị 1) nhưng không có người đi qua (K2 mở, giá trị 0), biểu thức lôgic của mạch điện tương đương với K1 AND K2 và trả về kết quả bằng 1.", a: false },
        { t: "Nếu chủ nhà lắp thêm một công tắc thủ công K3 mắc song song với toàn bộ cụm cảm biến trên để đèn luôn sáng khi bật K3, biểu thức lôgic mô tả mạch điện lúc này là (K1 AND K2) OR K3.", a: true }
      ]
    },
    {
      q: "Nhóm của An đang làm dự án thu âm podcast cho trường. An dùng phần mềm ghi âm trên máy tính và có thể điều chỉnh khoảng thời gian giữa hai lần lấy mẫu cùng số mức biểu diễn giá trị mẫu trước khi ghi âm.",
      st: [
        { t: "Quá trình số hóa âm thanh bằng PCM gồm lấy mẫu tín hiệu, lượng tử hóa giá trị biên độ của các mẫu và mã hóa kết quả thành dãy bit.", a: true },
        { t: "Nếu An giảm chu kì lấy mẫu (khoảng thời gian giữa hai lần lấy mẫu ngắn lại) và dùng thang lấy mẫu chi tiết hơn, tệp âm thanh thu được sẽ trung thực hơn nhưng cần ít không gian lưu trữ hơn.", a: false },
        { t: "Tại bước biểu diễn giá trị mẫu, nếu An chọn thang lấy mẫu 256 mức thì biên độ tín hiệu của mỗi mẫu âm thanh sẽ được mã hoá và ghi lại bằng 1 byte.", a: true },
        { t: "An thiết lập tốc độ bit (bit-rate) cho tệp thu âm là 128 kb/s (kilobit/giây). Nếu An thu âm một đoạn podcast dài đúng 10 giây, tệp âm thanh đó sẽ chiếm 1 280 KB (kilobyte) dung lượng lưu trữ.", a: false }
      ]
    },
    {
      q: "Đội truyền thông của trường dự định thiết kế một logo mới và đăng tải lên website trường. Bạn Minh vẽ logo trên máy tính và băn khoăn không biết nên lưu tệp ảnh dưới định dạng nào để có hình nền trong suốt và đảm bảo chất lượng hiển thị tốt nhất.",
      st: [
        { t: "Định dạng BMP thường được sử dụng để lưu trữ ảnh bitmap không nén.", a: true },
        { t: "Để logo có nền trong suốt giúp dễ dàng chồng lên các hình ảnh khác trên website mà không bị che khuất, Minh nên chọn lưu logo dưới định dạng JPEG.", a: false },
        { t: "Nếu Minh lưu logo dưới định dạng PNG, tệp ảnh sẽ có độ nén tốt, không mất mát chất lượng hình ảnh và dung lượng thường nhỏ hơn so với tệp BMP nguyên gốc.", a: true },
        { t: "Giả sử logo Minh thiết kế có kích thước 100 x 100 điểm ảnh, sử dụng hệ màu RGB với độ sâu màu 24 bit và lưu dưới dạng không nén. Dung lượng cần thiết để lưu trữ riêng phần dữ liệu các điểm ảnh (chưa tính thông tin phụ) của logo này là đúng 30 000 byte.", a: true }
      ]
    },
    {
      q: "Minh được bố tặng một chiếc điện thoại thông minh dùng hệ điều hành Android. Khi cầm máy, Minh quan sát thấy có các nút bấm vật lý bên hông máy và một hàng biểu tượng nhỏ nằm ở sát mép trên cùng của màn hình.",
      st: [
        { t: "Nút khóa nằm ở bên thân máy thường được sử dụng để bật/tắt màn hình; nhấn giữ nút thường dùng để bật nguồn hoặc mở menu nguồn.", a: true },
        { t: "Hàng biểu tượng sát mép trên cùng màn hình là thanh truy cập nhanh, chứa các ứng dụng mà Minh thường xuyên sử dụng nhất.", a: false },
        { t: "Nếu Minh muốn điều chỉnh âm thanh to nhỏ khi nghe video bài giảng, bạn ấy cần sử dụng các nút tăng/giảm âm lượng vật lý bên thân máy.", a: true },
        { t: "Khi biểu tượng Wi-Fi trên thanh trạng thái biến mất, Minh nên kiểm tra lại kết nối Wi-Fi; điện thoại vẫn có thể kết nối Internet bằng dữ liệu di động.", a: true }
      ]
    },
    {
      q: "Giáo viên môn Tin học yêu cầu lớp chuẩn bị phần mềm học trực tuyến và công cụ lưu trữ để nộp bài tập nhóm. Tuấn sử dụng điện thoại thông minh kết nối mạng để tìm và tải các ứng dụng cần thiết này.",
      st: [
        { t: "Chợ phần mềm (App Store / CH Play) là ứng dụng có sẵn trên điện thoại giúp Tuấn tìm kiếm và cài đặt thêm các phần mềm mới.", a: true },
        { t: "Google Drive và OneDrive là các phần mềm chuyên dùng để hỗ trợ học tập trực tuyến qua video (họp trực tuyến) giống như Zoom.", a: false },
        { t: "Tuấn có thể cài đặt MS Teams hoặc Google Meet từ chợ phần mềm để tham gia các buổi học trực tuyến do thầy cô thiết lập.", a: true },
        { t: "Để hoàn thành nhiệm vụ, Tuấn có thể dùng ứng dụng Máy ảnh chụp lại sơ đồ tư duy trên giấy, sau đó mở ứng dụng Google Drive để tải ảnh lên đám mây và chia sẻ link cho cô giáo.", a: true }
      ]
    },
    {
      q: "Một trường học dự định thiết lập một hệ thống mạng. Các máy tính trong phòng thực hành được kết nối với nhau thông qua một bộ chuyển mạch (Switch) để chia sẻ một máy in chung. Sau đó, toàn bộ mạng này được kết nối với một bộ định tuyến (Router) và đăng kí với nhà cung cấp dịch vụ viễn thông để truy cập Internet.",
      st: [
        { t: "Mạng kết nối các máy tính và máy in bên trong phòng thực hành của trường học là một ví dụ về mạng cục bộ (LAN).", a: true },
        { t: "Việc sử dụng Internet (mạng diện rộng) mang lại quy mô kết nối toàn cầu, do đó mạng Internet thuộc quyền sở hữu chung của một cơ quan quản lí tập trung duy nhất trên thế giới.", a: false },
        { t: "Trong hệ thống được mô tả, Router có thể định tuyến dữ liệu từ mạng LAN ra Internet thông qua kết nối của nhà cung cấp dịch vụ.", a: true },
        { t: "Nếu kết nối cáp quang từ nhà cung cấp dịch vụ viễn thông bị đứt (mất mạng Internet), các học sinh trong phòng thực hành vẫn có thể chia sẻ tệp tin cho nhau và in ấn qua máy in dùng chung.", a: true }
      ]
    }
  ]
};

const DATA = [PART1, PART2];
const LETTERS = ["A", "B", "C", "D"];
const TF_LETTERS = ["a", "b", "c", "d"];
const TOTAL_ITEMS = PART1.questions.length + PART2.questions.length * 4; // 55 + 60 = 115

/* ============================================================
   TIẾN ĐỘ (localStorage)
   ============================================================ */
const STORE_KEY = "quiztin-progress-v1";

const store = {
  load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); }
    catch { return {}; }
  },
  save(data) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch {}
  },
  record(key, ok) {
    const data = this.load();
    const e = data[key] || { c: 0, w: 0 };
    if (ok) e.c++; else e.w++;
    e.last = ok ? "c" : "w";
    data[key] = e;
    this.save(data);
  },
  masteredCount() {
    const data = this.load();
    let n = 0;
    allItems().forEach(it => { if (data[it.key] && data[it.key].last === "c") n++; });
    return n;
  },
  masteredKeys() {
    const data = this.load();
    const set = new Set();
    Object.keys(data).forEach(k => { if (data[k].last === "c") set.add(k); });
    return set;
  }
};

/* ============================================================
   XÂY DỰNG DANH SÁCH CÂU HỎI
   ============================================================ */
function allItems() {
  const items = [];
  DATA.forEach(part => {
    part.questions.forEach((question, qi) => {
      if (part.type === "mc") {
        items.push({
          key: `mc-${part.id}-${qi}`, kind: "mc", part: part.id,
          label: `Câu ${qi + 1}`, text: question.q,
          options: question.options, answer: question.answer
        });
      } else {
        question.st.forEach((s, si) => {
          items.push({
            key: `tf-${part.id}-${qi}-${si}`, kind: "tf", part: part.id,
            label: `Câu ${qi + 1} · ý ${TF_LETTERS[si]}`, context: question.q,
            text: s.t, answer: s.a
          });
        });
      }
    });
  });
  return items;
}

function buildSession() {
  let items = allItems().filter(it => state.parts.has(it.part));
  if (state.mode === "test") {
    const mc = shuffleArr(items.filter(i => i.kind === "mc")).slice(0, state.cfgMC);
    const tf = shuffleArr(items.filter(i => i.kind === "tf")).slice(0, state.cfgTF);
    items = mc.concat(tf);
    return state.shuffle ? shuffleArr(items) : items;
  }
  return state.shuffle ? shuffleArr(items) : items;
}

function shuffleArr(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================================================
   TRẠNG THÁI
   ============================================================ */
const state = {
  parts: new Set([1, 2]),
  mode: null,          // "flash" | "learn" | "test"
  shuffle: false,
  swap: false,         // đảo câu hỏi <-> đáp án (thẻ ghi nhớ)
  cfgMC: 20,
  cfgTF: 16,
  deck: [], di: 0, flipped: false,
  quiz: [], qi: 0, answers: [], answered: [], wrong: [],
  lastResults: null
};

const $ = sel => document.querySelector(sel);

/* ============================================================
   ĐIỀU HƯỚNG MÀN HÌNH
   ============================================================ */
function showScreen(name) {
  ["home", "flash", "quiz", "results"].forEach(s => {
    $(`#screen-${s}`).classList.toggle("hidden", s !== name);
  });
  $("#btn-home").classList.toggle("hidden", name === "home");
  window.scrollTo({ top: 0 });
}

function refreshMastery() {
  const n = store.masteredCount();
  $("#mastery-label").textContent = `${n} / ${TOTAL_ITEMS}`;
}

function renderHomeStats() {
  const mastered = store.masteredKeys();
  const wrap = $("#home-stats");
  wrap.innerHTML = DATA.map(part => {
    const items = allItems().filter(i => i.part === part.id);
    const m = items.filter(i => mastered.has(i.key)).length;
    const pct = items.length ? Math.round(m / items.length * 100) : 0;
    return `
      <div class="stat-row">
        <div class="stat-head"><span>${part.name}</span><b>${m}/${items.length} · ${pct}%</b></div>
        <div class="stat-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>`;
  }).join("");
}

/* ============================================================
   THẺ GHI NHỚ
   ============================================================ */
function startFlash() {
  state.mode = "flash";
  state.deck = buildSession();
  state.di = 0;
  state.flipped = false;
  $("#swap-toggle").checked = state.swap;
  showScreen("flash");
  renderCard();
}

function mcAnswerHTML(item) {
  return `
    <div class="face-answer">
      <span class="letter">${LETTERS[item.answer]}</span>
      <span>${item.options[item.answer]}</span>
    </div>`;
}

function tfAnswerHTML(item) {
  return `
    <div class="face-verdict">
      <span class="verdict ${item.answer ? "true" : "false"}">${item.answer ? "ĐÚNG" : "SAI"}</span>
      <span class="verdict-sub">${item.label}</span>
    </div>`;
}

function questionFaceHTML(item) {
  if (item.kind === "mc") {
    return `
      <span class="face-label">${item.label}</span>
      <div class="face-spacer"></div>
      <p class="face-text">${item.text}</p>
      <div class="face-spacer"></div>
      <p class="face-foot">4 lựa chọn · nhấn để lật xem đáp án</p>`;
  }
  return `
    <span class="face-label">${item.label} — Đúng hay sai?</span>
    <p class="face-context">${item.context}</p>
    <div class="face-spacer"></div>
    <p class="face-text">${item.text}</p>
    <div class="face-spacer"></div>
    <p class="face-foot">nhấn để lật xem đáp án</p>`;
}

function answerFaceHTML(item) {
  const head = item.kind === "mc"
    ? `<span class="face-label ans">Đáp án</span>`
    : `<span class="face-label ans">Đáp án</span>`;
  const body = item.kind === "mc" ? mcAnswerHTML(item) : tfAnswerHTML(item);
  const q = item.kind === "tf" ? `<p class="face-context">${item.context}</p>` : "";
  const foot = item.kind === "mc"
    ? `<p class="face-foot">nhấn để lật lại câu hỏi</p>`
    : `<p class="face-foot">nhấn để lật lại câu hỏi</p>`;
  return `${head}${q}<div class="face-spacer"></div>${body}<div class="face-spacer"></div>${foot}`;
}

function renderCard() {
  const total = state.deck.length;
  $("#flash-count").textContent = `${Math.min(state.di + 1, total)} / ${total}`;
  $("#flash-fill").style.width = total ? (state.di / total * 100) + "%" : "0%";
  $("#btn-prev").disabled = state.di === 0;
  $("#btn-next").disabled = state.di >= total - 1;

  const item = state.deck[state.di];
  $("#face-front").innerHTML = state.swap ? answerFaceHTML(item) : questionFaceHTML(item);
  $("#face-back").innerHTML = state.swap ? questionFaceHTML(item) : answerFaceHTML(item);
  $("#card-inner").classList.remove("flipped");
  state.flipped = false;
}

function flipCard() {
  state.flipped = !state.flipped;
  $("#card-inner").classList.toggle("flipped", state.flipped);
}

function nextCard() { if (state.di < state.deck.length - 1) { state.di++; renderCard(); } else finishDeck(); }
function prevCard() { if (state.di > 0) { state.di--; renderCard(); } }

function gradeCard(ok) {
  const item = state.deck[state.di];
  store.record(item.key, ok);
  refreshMastery();
  nextCard();
}

function finishDeck() {
  const mastered = store.masteredKeys();
  const m = state.deck.filter(i => mastered.has(i.key)).length;
  $("#face-front").innerHTML = `
    <div class="face-verdict" style="width:100%">
      <span class="face-label">Hoàn thành</span>
      <h3 style="font-size:1.5rem">Hết bộ thẻ!</h3>
      <p class="verdict-sub">Bạn đã tự đánh giá ${state.deck.length} thẻ — hiện tại ${m}/${state.deck.length} thẻ ở trạng thái «Đã thuộc».</p>
    </div>`;
  $("#face-back").innerHTML = $("#face-front").innerHTML;
  $("#card-inner").classList.remove("flipped");
  $("#flash-count").textContent = `${state.deck.length} / ${state.deck.length}`;
  $("#flash-fill").style.width = "100%";
}

/* ============================================================
   LUYỆN TẬP + BÀI KIỂM TRA
   ============================================================ */
function startQuiz(mode) {
  state.mode = mode;
  state.quiz = buildSession();
  state.qi = 0;
  state.answers = new Array(state.quiz.length).fill(null);
  state.answered = new Array(state.quiz.length).fill(false);
  state.wrong = [];
  showScreen("quiz");
  $("#learn-score").classList.toggle("hidden", mode !== "learn");
  $("#test-answered").classList.toggle("hidden", mode !== "test");
  $("#btn-submit").classList.toggle("hidden", mode !== "test");
  renderQuiz();
}

function quizScore() {
  let ok = 0;
  state.quiz.forEach((it, i) => { if (state.answered[i] && isCorrect(it, state.answers[i])) ok++; });
  return ok;
}

function isCorrect(item, ans) {
  return item.kind === "mc" ? ans === item.answer : ans === item.answer;
}

function updateQuizBar() {
  const total = state.quiz.length;
  $("#quiz-count").textContent = `${Math.min(state.qi + 1, total)} / ${total}`;
  $("#quiz-fill").style.width = (state.qi / total * 100) + "%";
  if (state.mode === "learn") {
    $("#learn-score").textContent = `Đúng: ${quizScore()}`;
  } else {
    const n = state.answered.filter(Boolean).length;
    $("#test-answered").textContent = `Đã trả lời: ${n}/${total}`;
  }
}

function optionHTML(item, i, disabled, cls) {
  return `
    <button class="option ${cls || ""}" data-i="${i}" ${disabled ? "disabled" : ""}>
      <span class="letter">${LETTERS[i]}</span><span>${item.options[i]}</span>
    </button>`;
}

function renderQuiz() {
  updateQuizBar();
  const item = state.quiz[state.qi];
  const body = $("#quiz-body");
  const footer = $("#quiz-footer");

  const head = `
    <div class="q-head">
      <span class="q-badge">${item.label}</span>
      <span class="q-part">${item.part === 1 ? "Phần I · Trắc nghiệm" : "Phần II · Đúng/Sai"}</span>
    </div>`;

  if (item.kind === "mc") {
    let optionsHTML = "";
    const learning = state.mode === "learn" && state.answered[state.qi];
    const testing = state.mode === "test";
    for (let i = 0; i < 4; i++) {
      let cls = "";
      if (learning) {
        if (i === item.answer) cls = "correct";
        else if (state.answers[state.qi] === i) cls = "wrong";
      } else if (testing && state.answers[state.qi] === i) cls = "selected";
      optionsHTML += optionHTML(item, i, learning, cls);
    }
    body.innerHTML = `${head}<p class="q-text">${item.text}</p><div class="options">${optionsHTML}</div>`;
  } else {
    const answeredLearn = state.mode === "learn" && state.answered[state.qi];
    let trueCls = "tf-btn true", falseCls = "tf-btn false";
    if (answeredLearn) {
      if (item.answer === true) trueCls += " correct";
      else if (state.answers[state.qi] === true) trueCls += " wrong";
      if (item.answer === false) falseCls += " correct";
      else if (state.answers[state.qi] === false) falseCls += " wrong";
    } else if (state.mode === "test" && state.answers[state.qi] !== null) {
      if (state.answers[state.qi] === true) trueCls += " selected";
      else falseCls += " selected";
    }
    body.innerHTML = `
      ${head}
      <p class="q-context">${item.context}</p>
      <p class="q-text">${item.text}</p>
      <div class="tf-buttons">
        <button class="${trueCls}" data-v="1" ${answeredLearn ? "disabled" : ""}>Đúng</button>
        <button class="${falseCls}" data-v="0" ${answeredLearn ? "disabled" : ""}>Sai</button>
      </div>`;
  }

  // footer
  if (state.mode === "learn") {
    if (state.answered[state.qi]) {
      const ok = isCorrect(item, state.answers[state.qi]);
      const correctText = item.kind === "mc"
        ? `${LETTERS[item.answer]}. ${item.options[item.answer]}`
        : (item.answer ? "Đúng" : "Sai");
      footer.innerHTML = `
        <div class="feedback ${ok ? "ok" : "bad"}">
          <span class="fb-icon">${ok
            ? `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12.5l2.5 2.5L16 9.5"/></svg>`
            : `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>`}
          </span>
          <span class="fb-text">${ok ? "<b>Chính xác!</b>" : `<b>Chưa đúng.</b> Đáp án: ${correctText}`}</span>
        </div>
        <div class="footer-row"><span></span><button class="btn-primary" id="btn-continue">${state.qi === state.quiz.length - 1 ? "Xem kết quả" : "Tiếp tục"}</button></div>`;
      $("#btn-continue").addEventListener("click", nextQuizItem);
    } else {
      footer.innerHTML = "";
    }
  } else {
    footer.innerHTML = `
      <div class="footer-row">
        <button class="btn-ghost" id="btn-qprev" ${state.qi === 0 ? "disabled" : ""}>← Câu trước</button>
        <button class="btn-ghost" id="btn-qnext" ${state.qi === state.quiz.length - 1 ? "disabled" : ""}>Câu sau →</button>
      </div>`;
    $("#btn-qprev").addEventListener("click", () => { if (state.qi > 0) { state.qi--; renderQuiz(); } });
    $("#btn-qnext").addEventListener("click", () => { if (state.qi < state.quiz.length - 1) { state.qi++; renderQuiz(); } });
  }
}

function answerMC(i) {
  if (state.mode === "test") {
    state.answers[state.qi] = i;
    state.answered[state.qi] = true;
    renderQuiz();
    return;
  }
  if (state.answered[state.qi]) return;
  const item = state.quiz[state.qi];
  state.answers[state.qi] = i;
  state.answered[state.qi] = true;
  const ok = isCorrect(item, i);
  if (!ok) state.wrong.push(state.qi);
  store.record(item.key, ok);
  refreshMastery();
  renderQuiz();
}

function answerTF(v) {
  const bool = v === 1 || v === true;
  if (state.mode === "test") {
    state.answers[state.qi] = bool;
    state.answered[state.qi] = true;
    renderQuiz();
    return;
  }
  if (state.answered[state.qi]) return;
  const item = state.quiz[state.qi];
  state.answers[state.qi] = bool;
  state.answered[state.qi] = true;
  const ok = isCorrect(item, bool);
  if (!ok) state.wrong.push(state.qi);
  store.record(item.key, ok);
  refreshMastery();
  renderQuiz();
}

function nextQuizItem() {
  if (state.qi < state.quiz.length - 1) { state.qi++; renderQuiz(); }
  else showResults();
}

function submitTest() {
  const unanswered = state.answered.filter(a => !a).length;
  if (unanswered > 0 && !confirm(`Bạn còn ${unanswered} câu chưa trả lời. Nộp bài ngay?`)) return;
  showResults();
}

/* ============================================================
   KẾT QUẢ
   ============================================================ */
function showResults() {
  const total = state.quiz.length;
  let ok = 0;
  state.wrong = [];
  state.quiz.forEach((it, i) => {
    const good = state.answered[i] && isCorrect(it, state.answers[i]);
    if (good) ok++; else state.wrong.push(i);
    store.record(it.key, good);
  });
  refreshMastery();

  const pct = total ? Math.round(ok / total * 100) : 0;
  const mcItems = state.quiz.filter(i => i.kind === "mc");
  const tfItems = state.quiz.filter(i => i.kind === "tf");
  const mcOk = mcItems.filter(it => { const i = state.quiz.indexOf(it); return state.answered[i] && isCorrect(it, state.answers[i]); }).length;
  const tfOk = tfItems.filter(it => { const i = state.quiz.indexOf(it); return state.answered[i] && isCorrect(it, state.answers[i]); }).length;

  const msg = pct >= 90 ? "Xuất sắc!" : pct >= 75 ? "Rất tốt!" : pct >= 50 ? "Khá ổn — tiếp tục cố gắng!" : "Đừng nản, luyện lại nhé!";
  $("#results-pct").textContent = pct + "%";
  $("#results-msg").textContent = msg;
  $("#results-detail").innerHTML =
    `Đúng <b>${ok}/${total}</b> câu` +
    (mcItems.length ? ` · Trắc nghiệm: <b>${mcOk}/${mcItems.length}</b>` : "") +
    (tfItems.length ? ` · Đúng/Sai: <b>${tfOk}/${tfItems.length}</b>` : "");

  const C = 2 * Math.PI * 52;
  const ring = $("#ring-fg");
  ring.style.strokeDasharray = C;
  ring.style.strokeDashoffset = C;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    ring.style.strokeDashoffset = C * (1 - pct / 100);
  }));

  // review
  const review = $("#review-block");
  if (state.wrong.length === 0) {
    review.innerHTML = `<div class="review-block"><div class="all-good">Không có câu sai nào trong lượt này. Giữ nhịp độ thế này!</div></div>`;
  } else {
    const rows = state.wrong.map(i => {
      const it = state.quiz[i];
      const qText = it.kind === "tf" ? `${it.text}` : it.text;
      const yours = state.answered[i]
        ? (it.kind === "mc" ? `${LETTERS[state.answers[i]]}. ${it.options[state.answers[i]]}` : (state.answers[i] ? "Đúng" : "Sai"))
        : "Chưa trả lời";
      const correct = it.kind === "mc" ? `${LETTERS[it.answer]}. ${it.options[it.answer]}` : (it.answer ? "Đúng" : "Sai");
      return `
        <div class="review-item">
          <div class="review-q"><span class="review-label">${it.label}</span><span class="review-question">${qText}</span></div>
          <div class="review-answers">
            <div class="ra"><span class="tag yours">Bạn chọn</span><span class="yours-val">${yours}</span></div>
            <div class="ra"><span class="tag correct-tag">Đáp án</span><span class="correct-val">${correct}</span></div>
          </div>
        </div>`;
    }).join("");
    review.innerHTML = `<div class="review-block"><h3 class="review-title">Xem lại ${state.wrong.length} câu sai</h3>${rows}</div>`;
  }

  showScreen("results");
  state.lastResults = { mode: state.mode, quiz: state.quiz.slice(), answers: state.answers.slice(), answered: state.answered.slice(), wrong: state.wrong.slice() };
}

function retryWrong() {
  const src = state.lastResults;
  if (!src || src.wrong.length === 0) return;
  state.mode = src.mode;
  state.quiz = src.wrong.map(i => src.quiz[i]);
  state.qi = 0;
  state.answers = new Array(state.quiz.length).fill(null);
  state.answered = new Array(state.quiz.length).fill(false);
  state.wrong = [];
  showScreen("quiz");
  $("#learn-score").classList.toggle("hidden", state.mode !== "learn");
  $("#test-answered").classList.toggle("hidden", state.mode !== "test");
  $("#btn-submit").classList.toggle("hidden", state.mode !== "test");
  renderQuiz();
}

function retryAll() {
  const src = state.lastResults;
  state.quiz = src.quiz;
  state.qi = 0;
  state.answers = new Array(state.quiz.length).fill(null);
  state.answered = new Array(state.quiz.length).fill(false);
  state.wrong = [];
  showScreen("quiz");
  $("#learn-score").classList.toggle("hidden", state.mode !== "learn");
  $("#test-answered").classList.toggle("hidden", state.mode !== "test");
  $("#btn-submit").classList.toggle("hidden", state.mode !== "test");
  renderQuiz();
}

/* ============================================================
   GẮN SỰ KIỆN
   ============================================================ */
document.querySelectorAll("#part-picker .chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const id = Number(chip.dataset.part);
    if (state.parts.has(id)) {
      if (state.parts.size === 1) return; // giữ ít nhất một phần
      state.parts.delete(id);
    } else state.parts.add(id);
    chip.classList.toggle("active", state.parts.has(id));
  });
});

document.querySelectorAll(".cfg-chips").forEach(group => {
  group.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      group.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const val = Number(chip.dataset.val);
      if (group.dataset.cfg === "mc") state.cfgMC = val; else state.cfgTF = val;
    });
  });
});

document.querySelectorAll(".mode-card").forEach(card => {
  card.addEventListener("click", () => {
    const mode = card.dataset.mode;
    if (mode === "flash") startFlash();
    else startQuiz(mode);
  });
});

$("#btn-home").addEventListener("click", () => {
  renderHomeStats();
  showScreen("home");
});

// flashcards
$("#flashcard").addEventListener("click", flipCard);
$("#btn-flip").addEventListener("click", flipCard);
$("#btn-next").addEventListener("click", nextCard);
$("#btn-prev").addEventListener("click", prevCard);
$("#btn-known").addEventListener("click", () => gradeCard(true));
$("#btn-unknown").addEventListener("click", () => gradeCard(false));
$("#btn-shuffle").addEventListener("click", () => {
  state.shuffle = !state.shuffle;
  $("#btn-shuffle").classList.toggle("on", state.shuffle);
  state.deck = shuffleArr(state.deck);
  state.di = 0;
  renderCard();
});
$("#swap-toggle").addEventListener("change", e => {
  state.swap = e.target.checked;
  renderCard();
});

// quiz (event delegation)
$("#quiz-body").addEventListener("click", e => {
  const opt = e.target.closest(".option");
  if (opt && !opt.disabled) { answerMC(Number(opt.dataset.i)); return; }
  const tf = e.target.closest(".tf-btn");
  if (tf && !tf.disabled) { answerTF(Number(tf.dataset.v)); }
});
$("#btn-submit").addEventListener("click", submitTest);
$("#btn-retry-wrong").addEventListener("click", retryWrong);
$("#btn-retry-all").addEventListener("click", retryAll);
$("#btn-go-home").addEventListener("click", () => { renderHomeStats(); showScreen("home"); });

// keyboard
document.addEventListener("keydown", e => {
  if (e.target.matches("input, textarea")) return;
  if (!$("#screen-flash").classList.contains("hidden")) {
    if (e.code === "Space" || e.code === "Enter") { e.preventDefault(); flipCard(); }
    else if (e.code === "ArrowRight") nextCard();
    else if (e.code === "ArrowLeft") prevCard();
  } else if (!$("#screen-quiz").classList.contains("hidden") && state.mode === "learn") {
    const item = state.quiz[state.qi];
    if (!state.answered[state.qi]) {
      if (item && item.kind === "mc" && ["Digit1", "Digit2", "Digit3", "Digit4"].includes(e.code)) {
        answerMC(Number(e.code.slice(-1)) - 1);
      } else if (item && item.kind === "tf" && (e.code === "Digit1" || e.code === "Digit2")) {
        answerTF(e.code === "Digit1" ? 1 : 0);
      }
    } else if (e.code === "Enter" || e.code === "Space") {
      e.preventDefault();
      const btn = $("#btn-continue");
      if (btn) btn.click();
    }
  }
});

/* khởi tạo */
renderHomeStats();
refreshMastery();
showScreen("home");
