$('#button').on('click', function () {
    $('#container').prepend(`<div class='commentContainer'>   
        <img src="userimg.png" alt="user">
        <div class='usrContainer'>
        <div class="usr"><div><p class='displayName'>${$('#displayName').val()}</p></div>
        <div class='buttons'> <div class='edit'>Edit</div><div class='delete'>Delete</div></div>
        </div>
        <p class='comment'>${$('#comment').val()}</p>
        <div class="hiddenContainer">
        <div class="hidden"><input class="hiddenInput" type="text" placeholder="Comment">
        <div class="submit">Submit</div></div></div>
        </div>
        `);
    if ($('#displayName').val().length > 0) {
        $('#displayName').val("");
    };
    if ($('#comment').val().length > 0) {
        $('#comment').val("");
    };
});
$("#container").on('click', '.delete', function () {
    let parent = $(this).parents()[3];
    $(parent).remove();
});
$("#container").on('click', '.edit', function () {
    let edit = $(this).parents()[2];
    edit = $(edit).children()[2];
    $(edit).toggleClass();
});
$("#container").on('click', '.submit', function () {
    let text2 = $(this).prev();
    let text = $(this).parents()[2];
    text = $(text).children()[1];
    $(text).replaceWith(`<p class='comment'>${$(text2).val()}</p>`);
    if ($(text2).val().length > 0) {
        $(text2).val("");
    };
});






