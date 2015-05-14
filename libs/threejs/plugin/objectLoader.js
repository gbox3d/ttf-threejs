/**
 * Created by gbox3d on 15. 1. 27..
 */

THREE.ObjectLoader_Gbox3d = function()  {

    THREE.ObjectLoader.call( this );

    this.__proto__.parseGeometries = THREE.ObjectLoader.prototype.parseGeometries;
    this.__proto__.parseMaterials = THREE.ObjectLoader.prototype.parseMaterials;
    this.__proto__.parseObject = THREE.ObjectLoader.prototype.parseObject;

}

THREE.ObjectLoader_Gbox3d.prototype.parse = function( json ) {

    var geometries = this.parseGeometries( json.geometries );
    var materials = this.parseMaterials( json.materials );
    var object = this.parseObject( json.object, geometries, materials );

    if(json.materials) {
        //텍스춰 로딩
        for(var i=0; i < json.materials.length;i++) {


            if(json.materials[i].map != undefined)  {
                var texture = THREE.ImageUtils.loadTexture(json.materials[i].map);
                //texture.anisotropy = self.renderer.getMaxAnisotropy();

                materials[json.materials[i].uuid].map = texture;

            }
        }
    }



    return {
        object : object,
        materials : materials,
        geometries : geometries
    }
}