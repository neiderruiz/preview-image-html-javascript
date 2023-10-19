const selectImage = document.getElementById("select_image");

selectImage.addEventListener("change", (e) => {
  console.log(e.target.files[0]);

  const imagePreview = document.getElementById("image_preview");
  // 1) fileReader
  //   const reader = new FileReader()

  //   reader.onload = () => {
  //       imagePreview.src = reader.result;
  //       console.log(reader.result)
  //   }

  //   reader.readAsDataURL(e.target.files[0])

  // 2) URL.createObjectURL

  const objectUrl = URL.createObjectURL(e.target.files[0]);

  imagePreview.src = objectUrl;

  console.log(objectUrl);
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target.image.files[0]);

  const data = new FormData(e.target);

  fetch("save-image", {
    method: "POST",
    body: data,
  });
});
