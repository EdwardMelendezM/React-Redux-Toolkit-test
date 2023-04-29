import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice';
import { RootState } from '../../app/store';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()




  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
    </section>
  );
}

export default Counter;