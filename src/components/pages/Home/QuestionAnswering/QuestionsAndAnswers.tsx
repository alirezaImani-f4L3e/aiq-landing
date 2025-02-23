'use client';

import { Button, Typography } from 'antd';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';


import QACollapse from './QACollapse';

const useStyles = createStyles(({ css }) => ({
  collapse: css`
    overflow-x: auto;
    flex: 2 1;
    min-width: 320px;
    min-height: max-content;
  `,
  container: css`
    padding-block: 24px;
  `,
  descTitle: css`
    margin-block: 0;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
  `,
  description: css`
    flex: 1;
  `,
}));

const QuestionsAndAnswers = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('landing');
  const mobile = false;

  return (
    <Flexbox className={styles.container} gap={16} horizontal={!mobile} width={'100%'}>
      <Flexbox className={styles.description} gap={16}>
        <Typography.Title className={styles.descTitle} level={2}>
          {t('questions.title')}
        </Typography.Title>

        <div>{t('questions.desc')}</div>

        <div>
          <Link href={'mailto:platform.aiq@gmail.com'} target="_blank">
            <Button variant="outlined">{t('questions.support_email')}</Button>
          </Link>
        </div>
      </Flexbox>

      <Flexbox className={styles.collapse}>
        <QACollapse />
      </Flexbox>
    </Flexbox>
  );
});

export default QuestionsAndAnswers;
