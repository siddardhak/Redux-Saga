import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] }


const pollReducer = createSlice({
    name: 'polling',
    initialState,
    reducers: {
        increment(state, action) {
            const pollDetails = action.payload;
            const existingPollItem = state.items.find((poll) => poll.name === pollDetails.name);
            if (!existingPollItem) {
                state.items.push({
                    name: pollDetails.name,
                    votes: 1
                });
            }
            else {
                existingPollItem.votes = existingPollItem.votes + 1;
            }
        },
        decrease(state, action) {
            const PollItemName = action.payload;
            const existingPollItem = state.items.find((poll) => PollItemName.name === poll.name);
            if (existingPollItem) {
                if (existingPollItem.votes === 1) {
                    existingPollItem.votes = 0;
                }
                else if (existingPollItem.votes === 0) {

                }
                else {
                    existingPollItem.votes = existingPollItem.votes - 1;
                }
            }
        }
    }
})

export const { increment, decrease } = pollReducer.actions;

export default pollReducer;