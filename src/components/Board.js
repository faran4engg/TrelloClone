import React, { Component } from 'react';
import TodoList from "./TodoList";
import AddButton from "./AddButton";
import { connect } from "react-redux";
import { sort } from "../redux/actions";
import { activeBoard } from "../redux/actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import store from '../redux/store';

class Board extends Component {

    state = {
        boardID: ""
    }

    componentDidMount() {
        const { boardID } = this.props.match.params;
        this.props.dispatch(activeBoard(boardID));
        this.setState({ boardID });
        console.log("active : " + store.getState().active)
        document.body.style.backgroundColor = "#0079bf";
    }

    componentDidUpdate() {
        console.log("active state from board collection: " + store.getState().active);
    }

    onDragEnd = (result) => {
        // come here again
        //const boardID = this.state.boardID;
        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return;
        }

        this.props.dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type, this.state.boardID));
    }
    
    render() { 

        const { lists, cards, boards } = this.props;
        const boardID = this.state.boardID;
        console.log(boardID);
        const anotherBoard = boards[boardID];
        console.log(anotherBoard);
        const board = boards[boardID];
        if (!board) {
            return <p>Board not found</p>
        }
        const listOrder = board.lists;

        return ( 
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="all-lists" direction="horizontal" type="list">
                {provided => (
                <div  {...provided.droppableProps} ref={provided.innerRef} style={{ display: "flex", flexDirection: "row"}}>    
                {listOrder.map((listID, index) => {
                    const list = lists[listID];
                    if (list) {
                        const listCards = list.cards.map(cardId => cards[cardId]);
                        return (
                            <div style={{ width: "272px", margin: "0 4px"}}> 
                                <TodoList
                                    listID={list.id}
                                    key={list.id}
                                    title={list.title}
                                    cards={listCards}
                                    index={index}
                                    boardID={this.state.boardID}
                                ></TodoList>
                            </div>
                        );
                    }
                })}
                {provided.placeholder}
                <AddButton list boardID={this.state.boardID}></AddButton>
                </div>          
                )}
                </Droppable>
                {/*<AddButton list></AddButton>*/}
            </DragDropContext>
         );
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    cards: state.cards,
    boards: state.boards
});

export default connect(mapStateToProps)(Board);