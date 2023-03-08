import { Preloader, Spinner, Circle, Face,} from './Loader.styled';

export const Loader = () => (
 <Preloader>
  <Spinner>
    <Face>
      <Circle />
    </Face>
    <Face>
      <Circle />
    </Face>
  </Spinner>
</Preloader>
);