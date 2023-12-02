const userModels = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const data = await userModels.getAllUsers();
        res.json({
            message: 'GET users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const { body } = req;
    if (!body.name || !body.email || !body.password) {
        return res.status(400).json({
            message: 'Create New User Failed',
            data: null
        })
    }
    try {
        await userModels.createNewUser(body);
        res.status(201).json({
            message: 'Create New User Success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        await userModels.updateUser(id, body);
        res.status(201).json({
            message: 'UPDATE User Success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userModels.deleteUser(id);
        res.json({
            message: 'DELETE User Success',
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}