import VerbCard from './VerbCard';
import { Flex } from 'antd';

function CardList({ verbs }) {
  return (
    <Flex vertical gap="large">
      {verbs.map((verb) => {
        return (
          <VerbCard
            key={verb.infinitive}
            spanish={verb.infinitive}
            english={verb.infinitive_english}
          />
        );
      })}
    </Flex>
  );
}

export default CardList;
