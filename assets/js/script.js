"use strict";

// file update
//#region

// let fileInput = document.querySelector(".file-input");
// let tableBody = document.querySelector("tbody");

// fileInput.addEventListener("change", function (e) {
//   for (let i = 0; i < e.target.files.length; i++) {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(e.target.files[i]);
//     fileReader.onload = (event) => {
//       let elem = "";
//       elem += `<tr>
//             <td><img src="${
//               event.target.result
//             }" style="width: 100px; height: 100px" alt="" /></td>
//             <td>${e.target.files[i].name}</td>
//             <td>${e.target.files[i].size / 1024}</td>
//             <td>
//             <a class="btn btn-primary">Edit</a>
//             <a class="btn btn-warning">Detail</a>
//             <a class="btn btn-danger">Delete</a>
//           </td>
//         </tr>`;

//       tableBody.innerHTML += elem;
//     };
//   }
// });
//#endregion

//HOME WORK
//#region

// let left = document.querySelector(".slider .icons .left");
// let right = document.querySelector(".slider .icons .right");

// right.addEventListener("click", function () {
//   let next = document.querySelector(".next");
//   next.classList.remove("next");

//   if (next.nextElementSibling != null) {
//     next.nextElementSibling.classList.add("next");
//   } else {
//     this.parentNode.nextElementSibling.firstElementChild.classList.add("next");
//   }
// });

// left.addEventListener("click", function () {
//   let next = document.querySelector(".next");
//   next.classList.remove("next");
//   if (next.previousElementSibling != null) {
//     next.previousElementSibling.classList.add("next");
//   } else {
//     this.parentNode.nextElementSibling.lastElementChild.classList.add("next");
//   }
// });

//#endregion



$(document).ready(function () {


    $(".right").click(function () {
        let elem = $(".next");
        $(elem).removeClass("next");

        if ($(elem).next().length != 0) {
            $(elem).next().addClass("next")
        } else {
            $(this).parent().next().children().first().addClass("next")
        }
    })

    $(".left").click(function () {
        let elem = $(".next");
        $(elem).removeClass("next")
        if ($(elem).prev().length != 0) {
            $(elem).prev().addClass("next")
        } else {
            $(this).parent().next().children().last().addClass("next")
        }
    })
});

