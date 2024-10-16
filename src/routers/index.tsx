import JsonFormat from '@/pages/JsonFormat';
import PageLayout from '@/pages/PageLayout';
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: 'json-format',
        element: <JsonFormat />,
      },
      {
        path: 'base64',
        element: <JsonFormat />,
      },
      // {
      //   path: 'url-encode-decode',
      //   element: <UrlEncodeDecode />,
      // },
      // {
      //   path: 'html-encode-decode',
      //   element: <HtmlEncodeDecode />,
      // },
      // {
      //   path: 'backslash-escape-unescape',
      //   element: <HtmlEncodeDecode />,
      // },
    ],
  },
]);
