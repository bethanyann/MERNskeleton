const express = require('express');

const router = express.Router();

// sample route
// a  route like this would fire
router.get('/', (req, res) => {
    res.json({msg: 'GET request working'});
});

/** SAMPLE ROUTES
 * a route like this would fire when going to /api/recipes because /api/ is defined as the route precursor in server.js 
 * 
 * GET all recipes
 * router.get('/', (res, req) => {
 *      res.json();
 * });
 * 
 * GET one recipe
 * router.get('/:id', (res, req) => {
 *      res.json();
 * })
 */

module.exports = router;