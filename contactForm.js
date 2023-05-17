document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // يمنع إعادة تحميل الصفحة بعد الضغط على الزر
  
    // استخراج قيم المدخلات
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // بناء بيانات الرسالة
    var data = {
      name: name,
      lastName: lastName,
      email: email,
      message: message
    };
  
    // إرسال البيانات إلى الخادم
    fetch("/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // عرض رسالة الاستجابة من الخادم
        alert(data.message);
      })
      .catch(function(error) {
        console.error(error);
      });
  });
