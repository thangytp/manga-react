var bookshelf = require('../bookshelf');
var Manga = require('./Manga');

var Chapter = bookshelf.Model.extend({
	tableName: 'chapters',
	mangas: function () {
		return this.belongsToMany(Manga);
	}
});