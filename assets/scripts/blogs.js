// code for blog section
// blog array
blogList = [];
// blog class
class Blog {
  constructor(img, title, date, content) {
    this.img = img;
    this.title = title;
    this.date = date;
    this.content = content;
  }
}
class UI {
  modalTrigger() {
    $(".modal").modal("show");
  }
}
blogList[0] = new Blog(
  `http://thrivetreatment.com/wp-content/uploads/2018/04/suffering-from-insomnia.jpg`,
  `Sleep...What's that?`,
  `01/27/2019`,
  `The deeper I get into coding/programming, the more I realize sleep is genuinely a treasure.`
);

blogList[1] = new Blog(
  `https://blogs.gcu.edu/college-of-science-engineering-and-technology/wp-content/uploads/sites/8/2016/02/computer-programming-778x518.jpg`,
  `Get Developer Friends`,
  `01/27/2019`,
  `If you are attempting to get into the tech industry (the vast abyss that it is).
  GET FRIENDS THAT HAVE YOU SAME GOALS. The closer their goals match yours the closer 
  your relationship with them should be.`
);

blogList.forEach(blog => {
  let blogDiv = $(".blog-div");
  let newPerBlog = $(`<div  class="col-md-4 col-sm-12">`);
  let newWithHtml = newPerBlog.html(`
        <a id="blog-btn">
        <img class="img-fluid" src="${blog.img}"/>
        <h5>${blog.title}</h5>
        <p id="blog-date">${blog.date}</p>
        <p id="blog-para" class="text-truncate">${blog.content}</p>
        </a>
      `);
  blogDiv.append(newWithHtml);

  $(".modal-body").html(`
        <img class="img-fluid" src="${blog.img}"/>
        <h5>${blog.title}</h5>
        <p id="blog-date">${blog.date}</p>
        <p id="blog-para">${blog.content}</p>
        `);
});

document.querySelector(".blog-div").addEventListener("click", e => {
  const blogUI = new UI();
  blogUI.modalTrigger(e);
  e.preventDefault();
});
