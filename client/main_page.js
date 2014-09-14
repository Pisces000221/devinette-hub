Template.featuring.helpers({
  'feat_today': function () {
    return { title: 'The First Quiz on Hub', desc: 'desc 01\nlorem ipsum\ndoes not support multi-line' };
  },
  'pop_today': function () {
    return { title: 'The Second Quiz on Hub', desc: 'This is the most popular on Day 1' };
  }
});

Template.banner.events({
  'click #btn_sign_up': function () {
    Router.go('/register');
  }
});
