import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'antd-mobile';
import { getMarchantList } from 'ACTIONS/marchantList/action.js'
import styles from './index.less';

class MarchantList extends React.Component {
	constructor (props) {
		super(props);
		const dataSource = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 != row2 
		});

		this.state = {
			dataSource,
			isLoading: true
		}
	}

	componentDidMount () {
		console.log('componentDidMount');
		this.props.getMarchantList(this.props.searchData);
	}

	componentWillReceiveProps (newProps) {
		if (newProps.marchantList != this.props.marchantList) {
			const { marchantList, hasMore } = newProps;
			
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(marchantList),
				isLoading: false
			});
		} else {
			this.setState({
				isLoading: false
			})
		}
	}

	//当所有数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用
	onEndReached = (event) => {
		this.setState({isLoading: true});
		if (this.state.isLoading && !this.props.hasMore) {
			this.setState({
				isLoading: false
			});
			return;
		}

		let { isLoading, hasMore, searchData, getMarchantList } = this.props; 

		//加载列表
		getMarchantList({
			...searchData,
			pageNum: ++searchData.pageNum
		})
	}

	//行数据渲染
	row = (rowData, sectionID, rowID) => {
		return (
			<div key={rowID} style={{ padding: '0 15px' }}>
				<div
					style={{
						lineHeight: '50px',
						color: '#888',
						fontSize: 18,
						borderBottom: '1px solid #F6F6F6'
					}}
				>{ rowData.title }</div>
				<div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
					<img style={{ height: '64px', marginRight: '15px' }} src={ rowData.img } alt=''/>
					<div style={{ lineHeight: 1 }}>
						<div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{ rowData.des }</div>
						<div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{ rowID }</span>￥</div>
					</div>
				</div>
			</div>
		);
	}

	//分割线
	separator = (sectionID, rowID) => (
		<div
			key={`${sectionID}-${rowID}`}
			className={styles.separator}/>
	)

	render () {
		console.log('props', this.props);
		const { pageSize } = this.props;

		return (
			<ListView
				ref={el => this.lv = el}
				dataSource={ this.state.dataSource }
				renderHeader={ () => <span>header</span> }
				renderFooter={() => (
					<div style={{ padding: 30, textAlign: 'center'}}>
						{this.state.isLoading ? 'Loading...' : 'Loaded'}
					</div>
				)}
				renderRow={ this.row }
				renderSeparator={ this.separator }
				className="am-list"
				pageSize={ pageSize }
				useBodyScroll
				onScroll={() => { console.log('scroll'); }}
				scrollRenderAheadDistance={ 500 }
				onEndReached={ this.onEndReached }
				onEndReachedThreshold={ 10 }/>
		)
	}
}

function mapStateToProps (state) {
	return state.marchantList;
}

function mapDispatchToProps (dispatch) {
	return {
		getMarchantList: (params) => {
			dispatch(getMarchantList(params));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MarchantList)
