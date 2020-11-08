import React from "react"
import {printMsg} from "pg-auto-write"

export default class App extends React.Component {

    componentDidMount() {
        printMsg()
    }

	render() {
		return(<div>hey...</div>)
	}
}

