import { useDispatch, useSelector } from 'react-redux';
import { increment, decrease } from '../Store/polling';

const Poll = () => {

    const PollItemVotes = useSelector((state) => state.polls.items);

    const dispatch = useDispatch();

    const SidVotes = PollItemVotes.find((items) => items.name === 'Sid');
    const SiddardhaVotes = PollItemVotes.find((items) => items.name === 'Siddardha');
    const lolVotes = PollItemVotes.find((items) => items.name === 'lol');



    const increaseSidHandler = () => {

        dispatch(increment({
            name: 'Sid'
        }))

    }

    const increaseSiddHandler = () => {

        dispatch(increment({
            name: 'Siddardha'
        }))

    }

    const increaselolHandler = () => {

        dispatch(increment({
            name: 'lol'
        }))

    }

    const decreaseSidHandler = () => {
        dispatch(decrease({
            name: 'Sid'
        }))
    }

    const decreaseSiddHandler = () => {
        dispatch(decrease({
            name: 'Siddardha'
        }))
    }

    const decreaselolHandler = () => {
        dispatch(decrease({
            name: 'lol'
        }))
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Sid</th>
                        <td>{SidVotes ? SidVotes.votes : '0'}</td>
                    </tr>
                    <tr>

                        <td><button onClick={increaseSidHandler}>Increase</button><button onClick={decreaseSidHandler}>decrease</button></td>
                    </tr>
                    <tr>
                        <th>Siddardha</th>
                        <td>{SiddardhaVotes ? SiddardhaVotes.votes : '0'}</td>

                    </tr>
                    <tr>

                        <td><button onClick={increaseSiddHandler}>Increase</button><button onClick={decreaseSiddHandler}>decrease</button></td>                    </tr>
                    <tr>
                        <th>Lol</th>
                        <td>{lolVotes ? lolVotes.votes : '0'}</td>

                    </tr>
                    <tr>

                        <td><button onClick={increaselolHandler}>Increase</button><button onClick={decreaselolHandler}>decrease</button></td>                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Poll;
