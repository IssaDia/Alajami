const router = require('express').Router();
let Category = require('../models/category.model');
let Article = require('../models/article.model');

let slugify = require('slugify')
const mongoose = require('mongoose')


router.route('/').get((req, res) => {
  Article.findOne({
      title: 'Article 1'
    })
    .populate('category')
    .exec()
    .then(data => res.json(data.category.slug))

    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/category/:id').get((req, res) => {

      Category.findById(req.params.id)
        .populate('articles')
        .exec()
        .then(data => {
          res.status(200).json({
            articles: data.map(article => {
              return {
                title: article.title

              };
            })
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
});

      router.route('/admin/add').post((req, res) => {
        const title = req.body.title;
        const slug = slugify(req.body.title);
        const article = req.body.articles;



        const newCategory = new Category({
          _id: new mongoose.Types.ObjectId(),
          title,
          article,
          slug
        });

        newCategory.save()
          .then(() => res.status(201).json({
            message: 'Article added!',
            createdCategory: newCategory
          }))
          .catch(err => res.status(400).json('Error: ' + err));
      });

      module.exports = router;