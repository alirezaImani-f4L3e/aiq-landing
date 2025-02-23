'use client';

import { Collapse, Space } from 'antd';
import { createStyles } from 'antd-style';
import { PropsWithChildren, memo } from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = createStyles(({ css, token }) => ({
  collapseItem: css`
    margin-block-end: 8px;
    padding: 8px;

    background: ${token.colorFillTertiary};
    border: none !important;
    border-radius: ${token.borderRadius} !important;
    box-shadow: 0 0 0 1px ${token.colorBorder} inset !important;
  `,
}));

interface QAMessage {
  key: string;
  label: string;
}

type QAMessageType = QAMessage & PropsWithChildren;

const QACollapse = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('landing');

  const QAMessages: QAMessageType[] = [
    {
      children: <p>{t('questions.is_free_desc')}</p>,
      key: '1',
      label: t('questions.is_free'),
    },
    {
      children: <p>{t('questions.whats_credit_desc')}</p>,
      key: '2',
      label: t('questions.whats_credit'),
    },
    {
      children: <p>{t('questions.insufficient_credit_desc')}</p>,
      key: '3',
      label: t('questions.insufficient_credit'),
    },
  ];

  return (
    <Space direction="vertical">
      {QAMessages.map((item: QAMessageType) => (
        <Collapse
          bordered={false}
          className={styles.collapseItem}
          collapsible="header"
          items={[
            {
              children: item.children,
              key: item.key,
              label: item.label,
            },
          ]}
          key={item.key}
        />
      ))}
    </Space>
  );
});

export default QACollapse;
