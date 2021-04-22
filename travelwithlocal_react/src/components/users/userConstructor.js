let userConstructor = (function() {
    let userName = "";
    let userType = "";
    let userStatus = 0;

    let getName = function() {
        console.log("Get current user"+ userName)
        return userName;
    };

    let setName = function(name) {
        console.log("Set Name to "+ name)
        userName = name;
    };


    let getUserType = function() {
        console.log("Get current userType"+ userType)
        return userType;
    };

    let setUserType = function(type) {
        console.log("Set userType to "+ type)
        userType = type;
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
        setUserStatus: setUserStatus,
        getUserType: getUserType,
        setUserType: setUserType
}

})();

export default userConstructor;