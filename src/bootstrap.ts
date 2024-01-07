import '@/assets/styles/main.scss';

import config from '@/config';
import { store } from '@/store';
import { http, i18n, storage } from '@/services';

if (config.app.isDev) {
  console.log('DEVELOPMENT');
} else {
  console.log('PRODUCTION');
}

i18n.init({
  languages: config.language.list,
  currentLanguage: storage.local.get(config.language.key),
  initialLanguage: config.language.initial,
  backend: {
    loadPath: `${config.api.baseUrl}/admin/translate/ADMIN_CABINET/{{lng}}`,
  },
  onChange: language => storage.local.set('language', language),
});

http.init({
  configFn: () => {
    const state = store.getState();
    const token = state.auth.token;

    return {
      baseURL: config.api.baseUrl,
      headers: {
        ...(token ? { token: token } : {}),
      },
    };
  },
});

// Admin Route
//   .post('/login', Admin.LOGIN)
//   .post('/check_token', Admin.POST_AUTH)
//   .put('/login', Authorized.AUTH, Admin.PUT_PASS)
//   // Files Route
//   .get('/files/:id', Authorized.AUTH, Files.GET_SINGLE)
//   .post('/files/upload', Authorized.AUTH, FileUpload.single('file'), Files.POST)
//   .post('/files/:id', Authorized.AUTH, Files.DELETE)
//   // Translate Route
//   .get('/admin/translate/:id', Authorized.AUTH, Translate.GET_SINGLE)
//   .put('/admin/translate/:id', Authorized.AUTH, Translate.PUT)
//   .delete('/admin/translate/:id', Authorized.AUTH, Translate.DELETE)
//   .post('/admin/translate', Authorized.AUTH, Translate.POST)
//   .post('/admin/translate/pageable', Authorized.AUTH, Translate.GET)
//   // Aphorism Route
//   .get('/admin/aphorism/:id', Authorized.AUTH, Aphorisms.GET_SINGLE)
//   .put('/admin/aphorism/:id', Authorized.AUTH, Aphorisms.PUT)
//   .delete('/admin/aphorism/:id', Authorized.AUTH, Aphorisms.DELETE)
//   .post('/admin/aphorism', Authorized.AUTH, Aphorisms.POST)
//   .post('/admin/aphorism/pageable', Authorized.AUTH, Aphorisms.GET)
//   // Article Route
//   .get('/admin/article/:id', Authorized.AUTH, Articles.GET_SINGLE)
//   .put('/admin/article/:id', Authorized.AUTH, Articles.PUT)
//   .delete('/admin/article/:id', Authorized.AUTH, Articles.DELETE)
//   .post('/admin/article', Authorized.AUTH, Articles.POST)
//   .post('/admin/article/pageable', Authorized.AUTH, Articles.GET)
//   // Category Route
//   .get('/admin/categoryRef/:type', Authorized.AUTH, Category.GET_REF)
//   .get('/admin/category/:id', Authorized.AUTH, Category.GET_SINGLE)
//   .put('/admin/category/:id', Authorized.AUTH, Category.PUT)
//   .delete('/admin/category/:id', Authorized.AUTH, Category.DELETE)
//   .post('/admin/category', Authorized.AUTH, Category.POST)
//   .post('/admin/category/pageable', Authorized.AUTH, Category.GET)
//   // Departments Route
//   .get('/admin/department/:id', Authorized.AUTH, Departments.GET_SINGLE)
//   .get('/admin/departmentRef', Authorized.AUTH, Departments.GET_REF)
//   .put('/admin/department/:id', Authorized.AUTH, Departments.PUT)
//   .delete('/admin/department/:id', Authorized.AUTH, Departments.DELETE)
//   .post('/admin/department', Authorized.AUTH, Departments.POST)
//   .post('/admin/department/pageable', Authorized.AUTH, Departments.GET)
//   // Employees Route
//   .get('/admin/employee/:id', Authorized.AUTH, Employees.GET_SINGLE)
//   .put('/admin/employee/:id', Authorized.AUTH, Employees.PUT)
//   .delete('/admin/employee/:id', Authorized.AUTH, Employees.DELETE)
//   .post('/admin/employee', Authorized.AUTH, Employees.POST)
//   .post('/admin/employee/pageable', Authorized.AUTH, Employees.GET)
//   // Faq Route
//   .get('/admin/faq/:id', Authorized.AUTH, Faq.GET_SINGLE)
//   .put('/admin/faq/:id', Authorized.AUTH, Faq.PUT)
//   .delete('/admin/faq/:id', Authorized.AUTH, Faq.DELETE)
//   .post('/admin/faq', Authorized.AUTH, Faq.POST)
//   .post('/admin/faq/pageable', Authorized.AUTH, Faq.GET)
//   // News Route
//   .get('/admin/news/:id', Authorized.AUTH, News.GET_SINGLE)
//   .put('/admin/news/:id', Authorized.AUTH, News.PUT)
//   .delete('/admin/news/:id', Authorized.AUTH, News.DELETE)
//   .post('/admin/news', Authorized.AUTH, News.POST)
//   .post('/admin/news/pageable', Authorized.AUTH, News.GET)

//   // Partners Route
//   .get('/admin/partners/:id', Authorized.AUTH, Partners.GET_SINGLE)
//   .put('/admin/partners/:id', Authorized.AUTH, Partners.PUT)
//   .delete('/admin/partners/:id', Authorized.AUTH, Partners.DELETE)
//   .post('/admin/partners', Authorized.AUTH, Partners.POST)
//   .post('/admin/partners/pageable', Authorized.AUTH, Partners.GET)

//   // Rectors Route
//   .get('/admin/rector/:id', Authorized.AUTH, Rectors.GET_SINGLE)
//   .put('/admin/rector/:id', Authorized.AUTH, Rectors.PUT)
//   .delete('/admin/rector/:id', Authorized.AUTH, Rectors.DELETE)
//   .post('/admin/rector', Authorized.AUTH, Rectors.POST)
//   .post('/admin/rector/pageable', Authorized.AUTH, Rectors.GET)

//   // Active Route
//   .get('/client/translate/:lang', Translate.GET_ACTIVE)
