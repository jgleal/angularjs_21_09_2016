/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.curso.angularjsapp;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import static java.util.Arrays.asList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author usuario
 */
@WebServlet(name = "TareasServlet", urlPatterns = {"/TareasServlet"})
public class TareasServlet extends HttpServlet {

    private static final Logger LOG = Logger.getLogger(TareasServlet.class.getName());
    private List<String> tareas;

    @Override
    public void init() throws ServletException {
        super.init(); //To change body of generated methods, choose Tools | Templates.
        tareas = new ArrayList<>();
        tareas.addAll(asList("Tarea Uno", "Tarea Dos", "Tarea Tres"));

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/plain;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            arrayJsonToString(out);
        }
    }

    private void arrayJsonToString(final PrintWriter out) {
        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
        tareas.forEach(arrayBuilder::add);
        out.println(arrayBuilder.build().toString());
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.getParameterMap().forEach(
                (k, v) -> {
                    LOG.log(Level.INFO, "En doPost. Clave: {0}.Valor:{1}", new Object[]{k, v[0]});
                    tareas.add(v[0]);
                }
        );
        response.setContentType("text/plain;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            arrayJsonToString(out);
        }
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getParameterMap().forEach(
                (k, v) -> {
                    LOG.log(Level.INFO, "En doDelete. Clave: {0}.Valor:{1}", new Object[]{k, v[0]});
                    tareas.removeIf(x -> x.equals(v[0]));
                }
        );
        response.setContentType("text/plain;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            arrayJsonToString(out);
        }
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getParameterMap().forEach(
                (k, v) -> {
                    LOG.log(Level.INFO, "En doDoput. Clave: {0}.Valor:{1}", new Object[]{k, v[0]});
                }
        );
        String antiguo = request.getParameter("antiguo");
        LOG.log(Level.INFO, "Valor antiguo: {0}", antiguo);
        String nuevo = request.getParameter("nuevo");
        LOG.log(Level.INFO, "Valor nuevo: {0}", nuevo);
        for (int i = 0; i < tareas.size(); i++) {
            if (tareas.get(i).equals(antiguo)) {
                tareas.set(i, nuevo);
            }
        }
        response.setContentType("text/plain;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            arrayJsonToString(out);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
