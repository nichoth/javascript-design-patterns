// The Russian Doll Pattern occurs when functions replace themselves.
//
// see this:
// https://javascriptweblog.wordpress.com/2010/04/27/the-russian-doll-principle-re-writing%C2%A0functions%C2%A0at%C2%A0runtime/

var pushTheRedButton = function() {

    //reassign a new function to the variable pushTheRedButton
    pushTheRedButton = function() {
        //this line gets called on all subsequent visits</span>
        alert("Now look what you've done!");
    };

    //this line only gets called on the first visit</span>
    alert("Don't ever push this button again!");
};

pushTheRedButton(); //"Don't ever push this button again!"
pushTheRedButton(); //"Now look what you've done!"
