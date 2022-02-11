import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

/**
 * Swagger 세팅
 *
 * @param {INestApplication} app
 */
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Comong API Docs')
    .setDescription('코몽(Comong) 서비스의 Api 문서입니다.')
    .setVersion('1.0.0')
    .build();


  const customOptions: SwaggerCustomOptions = {
    customCss: `
    @import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v13/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    .swagger-ui {
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      line-height: calc(1ex / 0.32);
      font-family: 'NanumSquareRound';
    }

    .swagger-ui .topbar { display: none } 
    .swagger-ui .opblock .opblock-summary-operation-id, .swagger-ui .opblock .opblock-summary-path,.swagger-ui .opblock .opblock-summary-path__deprecated { font-family: 'NanumSquareRound', 'sans-serif' } 
    .swagger-ui .opblock-tag { font-family: 'NanumSquareRound', 'sans-serif' }
    .swagger-ui .opblock .opblock-summary-operation-id, .swagger-ui .opblock .opblock-summary-path, .swagger-ui .opblock .opblock-summary-path__deprecated { font-size: 16px; font-weight: 700 }
    .swagger-ui .opblock.opblock-post { border-color: #22cc90 }
    .swagger-ui svg:not(:root) { width: 15px; margin: 0 20px 0 0 }
    .swagger-ui .opblock .opblock-summary-description { font-size: 13px; font-weight: 500; color: #444444 }
    .swagger-ui .code, .swagger-ui code {  font-family: 'Roboto Mono', 'NanumSquareRound', 'sans-serif '; font-size: 14px; font-weight: 400}
    .swagger-ui .response-col_status { font-family: 'NanumSquareRound', 'sans-serif'; font-size: 14px; font-weight: 700 }
    .swagger-ui .markdown p, .swagger-ui .markdown pre, .swagger-ui .renderedMarkdown p, .swagger-ui .renderedMarkdown pre { margin: 0; font-family: 'NanumSquareRound', 'sans-serif'; font-size: 14px; font-weight: 500 }
    .swagger-ui .response-col_description: { font-family: 'NanumSquareRound', 'sans-serif'; font-size: 16px; font-weight: 500 }
    .swagger-ui .opblock .opblock-section-header h4 { font-family: inherit }
    .swagger-ui .btn { font-family: inherit }
    .swagger-ui select {  font-family: 'NanumSquareRound', 'sans-serif' }
    .swagger-ui .parameter__type { font-family: inherit }
    .swagger-ui .parameter__extension, .swagger-ui .parameter__in { font-family: inherit }
    .swagger-ui .opblock.opblock-post .opblock-summary-method { background: #1cad6a }
    .swagger-ui .opblock.opblock-post .opblock-summary { border-color: #1cad6a }
    .swagger-ui .opblock.opblock-post { background: rgba(120,204,120,.1) }
    .swagger-ui .opblock.opblock-patch .opblock-summary-method { background: #00ad95 }
    .swagger-ui .opblock.opblock-patch .opblock-summary { border-color: #00ad95 }
    .swagger-ui .opblock.opblock-patch { background: rgba(20,227,194,.1) }
    `,
    customJs: `custom.js`,
    customSiteTitle: 'Comong Api Docs',
  }
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document, customOptions);
}