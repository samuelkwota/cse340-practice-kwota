import { Router } from 'express';

import { addDemoHeaders } from '../middleware/demo/headers.js';
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js';
import { facultyListPage, facultyDetailPage } from './faculty/faculty.js';

const router = Router();

// Basic pages
router.get('/', homePage);
router.get('/about', aboutPage);

// Faculty
router.get('/faculty', facultyListPage);
router.get('/faculty/:facultyId', facultyDetailPage);

// Demo + error test
router.get('/demo', addDemoHeaders, demoPage);
router.get('/test-error', testErrorPage);

export default router;
