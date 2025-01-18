function openDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  if (dialog) {
    dialog.showModal();
  } else {
    console.error(`Dialog avec l'ID "${dialogId}" introuvable.`);
  }
}

// Progress bars
$(document).ready(function () {
  $(".progress .progress-bar").css("width", function () {
    return $(this).attr("aria-valuenow") + "%";
  });
});
