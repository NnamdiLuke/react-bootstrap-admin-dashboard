import { Row, Col, Card, Button, Table } from 'react-bootstrap'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'


const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 700 },
  { name: 'Mar', sales: 500 }
]

function DashboardCard() {
  return (
    <>
      <Row className='g-4'>
        {['Users', 'Revenue', 'Products', 'Orders'].map((item) => (
          <Col md={3} key={item}>
            <Card className='shadow-sm border-0 rounded-4'>
              <Card.Body>
                <h6>{item}</h6>
                <h3>1,245</h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className='mt-4 shadow-sm border-0 rounded-4'>
        <Card.Body>
          <h5>Analytics</h5>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='sales' />
            </BarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
      <Card className='mt-4 shadow-sm border-0 rounded-4'>
        <Card.Body>
          <h5>Analytics</h5>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='sales' />
            </BarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>
      <Card className='mt-4 shadow-sm border-0 rounded-4'>
        <Card.Body>
          <h5>Analytics</h5>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='sales' />
            </BarChart>
          </ResponsiveContainer>
        </Card.Body>
      </Card>

      <Card className='mt-4 shadow-sm border-0 rounded-4'>
        <Card.Body>
          <div className='d-flex justify-content-between mb-3'>
            <h5>Recent Activity</h5>
            <Button>Quick Action</Button>
          </div>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Active</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  )
}

export default DashboardCard


