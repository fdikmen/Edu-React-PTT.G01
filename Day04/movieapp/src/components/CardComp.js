
import { Card, Icon, Button } from 'semantic-ui-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardComp({ avatar, title, type, createdAt, id, desc, year, handleDelete }) {
    const navigate = useNavigate()


    return (
        <Card
            image={avatar}
            header={title}
            description={desc}
            extra={
                <Button.Group widths='2'>
                    <Button icon color='red' onClick={() => handleDelete(id)}>
                        <Icon name='trash alternate' />
                    </Button>
                    <Button icon color='blue'>
                        <Icon name='right edit outline' onClick={()=>navigate('/Edit/'+id)}/>
                    </Button>
                </Button.Group>
            }

        />
    )
}
