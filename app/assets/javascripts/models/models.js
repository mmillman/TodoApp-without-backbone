TD.Models = (function () {

  function TodoItem(params) {
    if (!typeof params === "object") return;

    this.id = params.id,
    this.title = params.title,
    this.completed = false;
    this.test = function () {
      console.log("testing");
    };
  }

  TodoItem.all = [];

  TodoItem.prototype.save = function () {
    if (this.id) {
      this.create();
    } else {
      this.update();
    }
  };

  TodoItem.prototype.create = function () {
    var that = this;

    $.ajax("/dreams", {
      type: "POST", // SEE IF THIS WORKS LOWERCASE
      dataType: 'json',
      data: {
        "todo_item": JSON.stringify(that)
      },
      success: function () {
        console.log("create success!");
      },
      error: function () {
        console.log("create error!");
      }
    });
  };

  TodoItem.prototype.update = function () {
    var that = this;

    $.ajax("/dreams/" + that.id + "/edit", {
      type: "PUT",
      /*
        See if just doing type: "PUT" works, and also try '_method: "PUT"' from
        http://stackoverflow.com/questions/907910/how-do-i-put-data-to-rails-using-jquery
      */
      data: {
        "todo_item": JSON.stringify(that)
      },
      success: function () {
        console.log("create success!");
      },
      error: function () {
        console.log("update error!");
      }
    });
  };

  return {
    TodoItem: TodoItem
  };
})();