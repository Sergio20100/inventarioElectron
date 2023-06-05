import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import { BILLING, HOME, INVENTORY, PRODUCT,PROVIDERS } from './routerConst'

const { Header, Content, Footer, Sider } = Layout

const mainMenuItems: MenuProps['items'] = [
  
  {
    key: HOME,
    label: 'Inicio',
  },
  
  {
    key: PRODUCT,
    label: 'Productos',
  },
  {
    key: PROVIDERS,
    label: 'Proveedores',
  },
  {
    key: INVENTORY,
    label: 'Inventario',
   
  },
  {
    key: BILLING,
    label: 'Facturacion'
  }
]

function MainLayout(): JSX.Element {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const navigate = useNavigate();
  return (
    <Layout style={{
      height:'100%'
    }}>
      <Header style={{ display: 'flex', alignItems: 'center', color: "white" }}>
        <span>Aplicacion de inventario</span>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: colorBgContainer, height:'100%' }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={mainMenuItems}
              onClick={(item)=>{navigate(item.key)}}
            />
          </Sider>


          <Content style={{ padding: '0 24px', height:'100%' }}>
            <Outlet />
          </Content>
        
        
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default MainLayout
