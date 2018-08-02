var bookshelf = require('../bookshelf');
var Chapter = require('./Chapter');

var Manga = bookshelf.Model.extend({
	tableName: 'mangas',
	chapters: function () {
		return this.hasMany(Chapter);
	}
});