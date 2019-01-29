// // code for blog section
// // blog array
// blogList = [];
// // blog class
// class Blog {
//   constructor(img, title, date, content) {
//     this.img = img;
//     this.title = title;
//     this.date = date;
//     this.content = content;
//   }
// }
// class UI {
//   modalTrigger(target) {
//     if (target.className === "btn btn-info") {
//       $(".modal").modal("show");
//     }
//   }
// }
// blogList[0] = new Blog(
//   `http://thrivetreatment.com/wp-content/uploads/2018/04/suffering-from-insomnia.jpg`,
//   `Sleep...What's that?`,
//   `01/27/2019`,
//   `The deeper I get into coding/programming, the more I realize sleep is genuinely a treasure.`
// );

// blogList[1] = new Blog(
//   `https://blogs.gcu.edu/college-of-science-engineering-and-technology/wp-content/uploads/sites/8/2016/02/computer-programming-778x518.jpg`,
//   `Get Developer Friends`,
//   `01/27/2019`,
//   `If you are attempting to get into the tech industry (the vast abyss that it is).
//   GET FRIENDS THAT HAVE YOU SAME GOALS. The closer their goals match yours the closer
//   your relationship with them should be.`
// );
// blogList[2] = new Blog(
//   `https://i.imgflip.com/s9t87.jpg`,
//   `The Frustration of Coding`,
//   `01/28/2019`,
//   `Coding is equally frustrating and rewarding. When you try something new...
//     Hit Save(Compile) and it actually works...There's no better feeling. But, if you follow
//      those steps and get an error in your code...The frustration is as deep and vast as the
//      emptiness of space!!!!! `
// );

// blogList.forEach(blog => {
//   let blogDiv = $(".blog-div");
//   let newPerBlog = $(`<div class="col-md-4 col-sm-12" style="width: 80%">`);
//   let newWithHtml = newPerBlog.html(`
//         <div class="caption">
//             <h4>${blog.title}</h4>
//         </div>
//         <img class="img-fluid" src="${blog.img}"/>
//         <p id="blog-date">${blog.date}</p>
//         <p id="blog-para" class="text-truncate">${blog.content}</p>

//        <a id="blog-btn" class="btn btn-info">See More </a>
//       `);
//   blogDiv.append(newWithHtml);
//   $(".modal-body").html(`
//         <img class="img-fluid" src="${blog.img}"/>
//         <h5>${blog.title}</h5>
//         <p id="blog-date">${blog.date}</p>
//         <p id="blog-para">${blog.content}</p>
//         `);
// });

// document.querySelector(".blog-div").addEventListener("click", e => {
//   const blogUI = new UI();
//   blogUI.modalTrigger(e.target);
//   e.preventDefault();
// });
