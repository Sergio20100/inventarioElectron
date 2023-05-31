import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import { Outlet, Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

const mainMenuItems: MenuProps['items'] = [
  {
    key: 'productos',
    label: 'Productos',
    children: [
      {
        key: 'registrar_producto',
        label: 'Registrar producto'
      },
      {
        key: 'actualizar_producto',
        label: 'Actualizar producto'
      }
    ]
  },
  {
    key: 'proveedores',
    label: 'Proveedores',
    children: [
      {
        key: 'registrar_proveedor',
        label: 'Registrar proveedor'
      },
      {
        key: 'actualizar_proveedor',
        label: 'Actualizar proveedor'
      }
    ]
  },
  {
    key: 'inventario',
    label: 'Inventario',
    children: [
      {
        key: 'listar',
        label: 'Listar'
      }
    ]
  },
  {
    key: 'facturacion',
    label: 'Facturacion'
  }
]

function MainLayout(): JSX.Element {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', color: "white" }}>
        <span>Aplicacion de inventario</span>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={mainMenuItems}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default MainLayout
