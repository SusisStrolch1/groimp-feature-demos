<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<project xmlns="http://grogra.de/registry" graph="graph.xml">
 <import plugin="de.grogra.imp" version="2.2.2"/>
 <import plugin="de.grogra.math" version="2.2.2"/>
 <import plugin="de.grogra.imp3d" version="2.2.2"/>
 <import plugin="de.grogra.pf" version="2.2.2"/>
 <import plugin="de.grogra.rgg" version="2.2.2"/>
 <registry>
  <ref name="project">
   <ref name="objects">
    <ref name="files">
     <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="Model.rgg" systemId="pfs:Model.rgg"/>
     <de.grogra.pf.ui.registry.SourceDirectory name="param" systemId="pfs:param">
      <de.grogra.pf.ui.registry.SourceFile mimeType="text/x-grogra-rgg" name="parameters.rgg" systemId="pfs:param/parameters.rgg"/>
     </de.grogra.pf.ui.registry.SourceDirectory>
    </ref>
    <ref name="meta">
     <de.grogra.pf.registry.NodeReference name="Model" ref="851"/>
     <de.grogra.pf.registry.NodeReference name="parameters" ref="852"/>
    </ref>
   </ref>
  </ref>
  <ref name="workbench">
   <ref name="state">
    <de.grogra.pf.ui.registry.Layout name="layout">
     <de.grogra.pf.ui.registry.MainWindow>
      <de.grogra.pf.ui.registry.Split location="0.47172776">
       <de.grogra.pf.ui.registry.Split location="0.79620856" orientation="0">
        <de.grogra.pf.ui.registry.Split orientation="0">
         <de.grogra.pf.registry.Link source="/ui/panels/rgg/toolbar"/>
         <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/3d/defaultview">
          <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/3d/defaultview"/>
          <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="View"/>
          <de.grogra.pf.registry.Option name="view" type="de.grogra.imp3d.View3D" value="graphDescriptor=[de.grogra.imp.ProjectGraphDescriptor]visibleScales={true true true true true true true true true true true true true true true}visibleLayers={true true true true true true true true true true true true true true true true}epsilon=1.0E-6 visualEpsilon=0.01 magnitude=1.0 camera=(minZ=0.1 maxZ=2000.0 projection=[de.grogra.imp3d.PerspectiveProjection aspect=1.0 fieldOfView=0.21569686]transformation=(0.999987500026032 0.004999979166693203 0.0 -0.254999994300306 -0.0036055177638524847 0.7210975435646357 0.6928241717107411 -0.07499999832361973 0.003464106424733902 -0.692815511426628 0.7211065573778269 -4.540000077337027 0.0 0.0 0.0 1.0))eventFactory=[de.grogra.imp.viewhandler.EmptyViewEventFactory]"/>
         </de.grogra.pf.ui.registry.PanelFactory>
        </de.grogra.pf.ui.registry.Split>
        <de.grogra.pf.ui.registry.Split orientation="0">
         <de.grogra.pf.ui.registry.Tab selectedIndex="0">
          <de.grogra.pf.registry.Link source="/ui/panels/fileexplorer"/>
          <de.grogra.pf.registry.Link source="/ui/panels/objects/meta"/>
         </de.grogra.pf.ui.registry.Tab>
         <de.grogra.pf.registry.Link source="/ui/panels/statusbar"/>
        </de.grogra.pf.ui.registry.Split>
       </de.grogra.pf.ui.registry.Split>
       <de.grogra.pf.ui.registry.Split location="0.56398106" orientation="0">
        <de.grogra.pf.ui.registry.Tab selectedIndex="0">
         <de.grogra.pf.ui.registry.PanelFactory source="/ui/panels/texteditor">
          <de.grogra.pf.registry.Option name="documents" type="java.lang.String" value="&quot;\&quot;pfs:Model.rgg\&quot;&quot;"/>
          <de.grogra.pf.registry.Option name="panelId" type="java.lang.String" value="/ui/panels/texteditor"/>
          <de.grogra.pf.registry.Option name="panelTitle" type="java.lang.String" value="jEdit - Model.rgg"/>
          <de.grogra.pf.registry.Option name="selected" type="java.lang.String" value="pfs:Model.rgg"/>
         </de.grogra.pf.ui.registry.PanelFactory>
         <de.grogra.pf.registry.Link source="/ui/panels/attributeeditor"/>
        </de.grogra.pf.ui.registry.Tab>
        <de.grogra.pf.ui.registry.Tab selectedIndex="1">
         <de.grogra.pf.registry.Link source="/ui/panels/log"/>
         <de.grogra.pf.registry.Link source="/ui/panels/rgg/console"/>
        </de.grogra.pf.ui.registry.Tab>
       </de.grogra.pf.ui.registry.Split>
      </de.grogra.pf.ui.registry.Split>
     </de.grogra.pf.ui.registry.MainWindow>
    </de.grogra.pf.ui.registry.Layout>
   </ref>
  </ref>
 </registry>
</project>
