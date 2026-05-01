import { AlignLeft, Bell, User } from "lucide-react";
import {
  Navbar,
  Container,
  Form,
  FormControl
} from "react-bootstrap";

function TopNavbar({ setMobileOpen, isMobile }: any) {

  return (
    <Navbar className="bg-white shadow-sm sticky-top">
      <Container fluid>

        <div className="d-flex align-items-center gap-3">
          {isMobile && (
            <AlignLeft
              className="cursor-pointer"
              onClick={() => setMobileOpen(true)}
            />
          )}

          <h4 className="mb-0">MacStain</h4>
        </div>

        {!isMobile && (
          <Form className="w-25">
            <FormControl placeholder="Search..." />
          </Form>
        )}

        <div className="d-flex gap-3">
          <Bell />
          <User />
        </div>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;