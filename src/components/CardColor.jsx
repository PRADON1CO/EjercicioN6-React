import CardSmall from './CardSmall';
//import { Toast } from "primereact/toast";
import { Button, Form } from "react-bootstrap";
import "../style/cardColor.css"

const CardColor = () => {
    return (
        <div className="container">
      <div className="principalContainer p-0 py-3">
        <h3 className="px-4 m-0 mb-3">Administrar colores</h3>
        {/* alerta/aviso */}
        <div className="infoContainer py-4 d-flex align-items-center justify-content-center">
          <div className="colorBlock"></div>
          <Form.Group className="mx-5">
            <Form.Control
              type="text"
              placeholder="Ingrese un color"
            />
            <div className="d-flex justify-content-end">
              <Button
                className="mt-3 me-3"
                variant="primary"
                type="button"
                //onClick={}
              >
                Guardar
              </Button>
            </div>
          </Form.Group>
        </div>
      </div>
      <div className="row m-0">
        <CardSmall></CardSmall>
      </div>
    </div>
    );
};

export default CardColor;