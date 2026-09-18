// 极简交互：导航高亮 + 回到顶部
document.addEventListener("DOMContentLoaded", function () {
  // 导航当前页高亮
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
});
