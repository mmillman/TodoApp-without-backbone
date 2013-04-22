TD.Views = (function () {
  function TodoListView(el) {
    this.$el = $(el);

    this.$el.append($('<ul></ul>'));

  }

  TodoListView.prototype.method = function () {

  };

  return {
    TodoListView: TodoListView
  };
})();