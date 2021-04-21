let userConstructor = (function() {
    let userName = "";
    let userStatus = 0;

    let getName = function() {
        console.log("Get current user"+ userName)
        return userName;
    };

    let setName = function(name) {
        console.log("Set Name to "+ name)
        userName = name;
    };

    let getUserStatus = function() {
        console.log("Get current userStatus"+ userStatus)
        return userStatus;
    };

    let setUserStatus  = function(status) {
        console.log("Set userStatus to "+ status)
        userStatus = status;
    };

    return {
        getName: getName,
        setName: setName,
        getUserStatus: getUserStatus,
        setUserStatus: setUserStatus
    }

})();

export default userConstructor;