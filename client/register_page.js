Template.register_page.events({
  'click #btn_submit': function (e) {
    if (document.getElementById('text_password').value !== document.getElementById('text_rpt_password').value) {
      alert('');
      e.stopPropagation();
    }
  }
});
