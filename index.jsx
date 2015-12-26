var TodoList=React.createClass({
    render:function(){
        var row=function(item){
            return (<button className="list-group-item" key={item.id}>{item.text}{'   '}<span className="glyphicon glyphicon-ok"></span>{' '}
            <span className="glyphicon glyphicon-remove"></span>{'   '}
            </button>);
        }
        return (<div className="list-group">{this.props.items.map(row)}</div>);
    }
});
var TodoApp=React.createClass({
    
    getInitialState:function(){
        return {items:[],text:''};
    },
    onChange:function(e){
        this.setState({text:e.target.value})
    },
    handleClick:function(e){
        e.preventDefault();
        if(this.state.text==='')
        return;
        var nextItems=this.state.items.concat({text:this.state.text,id:Date.now()});
        var nextText=''
        this.setState({items:nextItems,text:nextText});
    },
    render:function(){
        return (
            <div className="panel panel-primary">
            <div className="panel-heading">A TODO Sample using ReactJS</div>
            <div className="panel-body">
            <form onSubmit={this.handleClick}>
            <input onChange={this.onChange} value={this.state.text}  />{' '}
            <button className="btn btn-primary"><span className='glyphicon glyphicon-plus' aria-hidden='true'></span>Add Items</button>
        </form>
        
        <TodoList items={this.state.items} />  
        
         </div> 
        </div>
        );
    }
    
});
ReactDOM.render(<TodoApp />,document.getElementById('content'));