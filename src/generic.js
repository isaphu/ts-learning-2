// const names: Array<string> = []; // string[]
// // names[0].split(' ');
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function countAndDescribe(element) {
    var descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Isa');
console.log(textStorage);
textStorage.removeItem('Isa');
var numberStorage = new DataStorage();
;
function createCourseGoal(title, description, date) {
    var CourseGoal = {};
    CourseGoal.title = title;
    CourseGoal.description = description;
    CourseGoal.completeUtil = date;
    return CourseGoal;
}
;
var names = ['Jack', 'Phu'];
// names.push('Manu');
