const observer = new IntersectionObserver(entries => {
    console.log(entries)
});

observer.observe(document.querySelectorAll("image-container"));


// < !--Add classes for fade in old script -->
//     <script>
//         (function(){
//             document.addEventListener('DOMContentLoaded', () => {
//                 const idFadeEls = [
//                     // List id to apply
//                     '#block-61ae3e6744a84b3479f4aca3',
//                     '#block-61ae3ec4554a7221c8a8130c',
//                     '#block-631356e8e986304147f9f7ff',
//                     '#block-63135c2a2a04d0e60a0df2f1',
//                     '#block-63135c3a36c665b182fa0099',
//                     '#block-63135c475c19ad3fb19c387b'
//                 ];

//                 let observer = new IntersectionObserver((entries, observer) => {
//                     entries.forEach(entry => {
//                         if (entry.isIntersecting) {
//                             entry.target.classList.add("fadeIn");
//                         } else entry.target.classList.add("postscroll");
//                     });
//                 }, {
//                     threshold: 1
//                 });

//                 idFadeEls.forEach(id => {
//                     const element = document.querySelector(id);
//                     if (element) {
//                         element.classList.add("preFade");
//                         observer.observe(element);
//                     }
//                 })
//             });
//   })()
//     </script>