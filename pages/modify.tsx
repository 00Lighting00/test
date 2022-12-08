import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class EditFrom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            editing: false,
        }
        this.handleEditing = this.handleEditing.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        const { editing } = this.state
        return (
            <div>
                <form>
                    {editing ? (
                        <div>
                            <TextField
                                onChange={(e) => {
                                    this.setState({ input: e.target.value })
                                }}
                                type='text'
                            />
                            <Button onClick={this.handleSubmit}>更新する</Button>
                        </div>
                    ) : (
                        <div>
                            <span>{this.state.input}</span>
                            <Button onClick={this.handleEditing}>内容を変更する</Button>
                        </div>
                    )}
                </form>
            </div>
        )
    }

    handleEditing(e) {
        e.preventDefault()
        this.setState({
            editing: !this.state.editing,
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (!this.state.input) return
        this.setState({
            input: this.state.input,
            editing: !this.state.editing,
        })
    }
}

export default EditFrom;