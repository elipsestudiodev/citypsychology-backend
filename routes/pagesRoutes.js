import { Router } from 'express';
import {
  getPages,
  getPageByIdOrSlug,
  createPage,
  updatePage,
  deletePage,
  togglePage,
} from '../controllers/pagesController.js';

const router = Router();

router.get('/', getPages);
router.get('/blog/:postSlug', (req, res, next) => {
  req.params.slugOrId = `blog/${req.params.postSlug}`;
  return getPageByIdOrSlug(req, res, next);
});
router.get('/blogs/:postSlug', (req, res, next) => {
  req.params.slugOrId = `blog/${req.params.postSlug}`;
  return getPageByIdOrSlug(req, res, next);
});
router.get('/:slugOrId', getPageByIdOrSlug);
router.post('/', createPage);
router.put('/:id', updatePage);
router.delete('/:id', deletePage);
router.patch('/:id/toggle', togglePage);

export default router;
