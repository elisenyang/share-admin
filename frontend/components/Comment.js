import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
    onDeleteClick() {
        if (window.confirm("Are you sure you want to delete this comment?") == true) {
        return this.onDelete();
        } else {
        console.log("You pressed Cancel!");
        }
    }

    onDelete() {
        fetch('/api/deleteComment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({postId:this.props.postId, commentIndex: this.props.index})
        }).then((response)=> {
            return response.json()
        }).then(responseJSON => {
            console.log(responseJSON)
        })
    }

    renderPostLink() {
        if (this.props.flagged) {
            return (
                <Link to={{pathname: '/post', query: {postId: this.props.postId, post: this.props.post}}}><p>View Post</p></Link>
            )
        }
    }

    onSuspendClick() {
        if (window.confirm("Are you sure you want to suspend this user?")===true) {
            fetch('/api/suspend', {
                method: 'POST',
                headers: {
                 "Content-Type": "application/json"
                },
                body: JSON.stringify({userId: this.props.commentInfo.user.id})
            })
        }
     }

     onWarningClick() {
        if (window.confirm("Are you sure you want to send this user a warning?")===true) {
            fetch('/api/warning', {
                method: 'POST',
                headers: {
                 "Content-Type": "application/json"
                },
                body: JSON.stringify({userId: this.props.commentInfo.user.id, content: this.props.commentInfo.content})
            }).then(response => {
                console.log(response)
            })
        }
    }


    render() {
        const icons = {
            bear: 'http://i66.tinypic.com/qywvbk.png',
            bird: 'http://i63.tinypic.com/2j61b1w.png',
            cat: 'http://i68.tinypic.com/i2py8g.png',
            crocodile: 'http://i65.tinypic.com/ml5kaq.png',
            dog: 'http://i67.tinypic.com/mb1hch.png',
            elephant: 'http://i67.tinypic.com/2j16czm.png',
            fox: 'http://i64.tinypic.com/34fxqtk.png',
            giraffe: 'http://i66.tinypic.com/259d81z.png',
            hippopotamus: 'http://i68.tinypic.com/nmdyqg.png',
            horse: 'http://i64.tinypic.com/2uruweg.png',
            lion: 'http://i64.tinypic.com/359hbad.png',
            panda: 'http://i64.tinypic.com/b8232e.png',
            pig: 'http://i67.tinypic.com/n177uo.png',
            rabbit: 'http://i67.tinypic.com/n177uo.png',
            rat: 'http://i63.tinypic.com/x0wkyd.png',
            rhinoceros: 'http://i64.tinypic.com/xkounb.png',
            sheep: 'http://i67.tinypic.com/2vbpncx.png',
            tiger: 'http://i65.tinypic.com/2vwbb7q.png'
        }
        let splitUsername = this.props.commentInfo.user.animal.split(' ')
        return (
            <div className='container' style={styles.container}>
            <div className='user' style={styles.user}>
                <div className='usernameInfo' style={styles.usernameInfo}>
                    <img src={icons[splitUsername[0].toLowerCase()]} style={styles.icon}/>
                    <p style={styles.username}> Anonymous {this.props.commentInfo.user.animal} <br/> answered...</p>
                </div>
                <div className='delete' style={styles.delete} onClick={()=> this.onDeleteClick()}>x</div>
            </div>
                <p className='content' style={styles.content}>{this.props.commentInfo.content}</p>
                {this.renderPostLink()}
                <a onClick={() => this.onSuspendClick()} style={styles.commentsInfo}>Suspend User</a>
                <a onClick={() => this.onWarningClick()} style={styles.commentsInfo}>Warning</a>
            </div>
        )
    }
}

export default Comment;

const styles = {
    container: {
        position: 'relative',
        borderBottom: '1px solid black',
        padding: '5px'
    },
    user: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    usernameInfo: {
        position: 'relative',
        width: "50%",
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '8px'
    },
    icon: {
        height: '40px',
        width: 'auto'
    },
    username: {
        paddingLeft: '8px',
        paddingTop: '2px',
        marginTop: '0px'
    },
    content: {
        paddingLeft: '8px',
        margin: '8px'
    },
    commentsInfo: {
        paddingLeft: '8px',
        margin: '8px',
        color: 'gray'
    }
}