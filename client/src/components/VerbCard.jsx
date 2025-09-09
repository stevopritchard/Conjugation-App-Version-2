import { Card, Button, Flex } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const { Meta } = Card;

function VerbCard({ spanish, english }) {
  return (
    <Card
      title={spanish}
      extra={
        <a href="#">
          <StarOutlined />
        </a>
      }
      style={{ width: 300 }}
    >
      <Flex vertical gap="middle">
        <Meta description={english} />
        <Button style={{ margin: '0 auto' }} type="primary">
          Select
        </Button>
      </Flex>
    </Card>
  );
}

export default VerbCard;
