// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Category can have many products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Product can belong to one category, but not many.
Product.belongsTo(Category, {
  foreignKey: 'Category_id',
});

// Products belongToMany Tags (through ProductTag). creates a "many to many" association
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
